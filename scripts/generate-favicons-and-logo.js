const fs = require('fs');
const zlib = require('zlib');

// CRC32 table for PNG chunk encoding
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = buf.slice(4, 8 + len);
  buf.writeUInt32BE(crc32(typeAndData), 8 + len);
  return buf;
}

function decodePng(filePath) {
  const buf = fs.readFileSync(filePath);
  let offset = 8;
  const idatChunks = [];
  let width, height;
  while (offset < buf.length) {
    const len = buf.readUInt32BE(offset);
    const type = buf.toString('ascii', offset + 4, offset + 8);
    if (type === 'IHDR') {
      width = buf.readUInt32BE(offset + 8);
      height = buf.readUInt32BE(offset + 12);
    } else if (type === 'IDAT') idatChunks.push(buf.slice(offset + 8, offset + 8 + len));
    offset += 12 + len;
  }

  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const stride = width * 4;
  const uncompressed = Buffer.alloc(width * height * 4);
  let rawPos = 0, prevRow = Buffer.alloc(stride);

  for (let y = 0; y < height; y++) {
    const filterType = raw[rawPos++];
    const curRow = uncompressed.slice(y * stride, (y + 1) * stride);
    for (let x = 0; x < stride; x++) {
      const rawVal = raw[rawPos++];
      const a = x >= 4 ? curRow[x - 4] : 0, b = prevRow[x], c = x >= 4 ? prevRow[x - 4] : 0;
      let val = 0;
      if (filterType === 0) val = rawVal;
      else if (filterType === 1) val = (rawVal + a) & 0xff;
      else if (filterType === 2) val = (rawVal + b) & 0xff;
      else if (filterType === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
      else if (filterType === 4) {
        const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        val = (rawVal + (pa <= pb && pa <= pc ? a : (pb <= pc ? b : c))) & 0xff;
      }
      curRow[x] = val;
    }
    prevRow = curRow;
  }
  return { width, height, pixels: uncompressed };
}

function encodePng(width, height, pixels) {
  const stride = width * 4;
  const raw = Buffer.alloc(height * (stride + 1));
  let rawPos = 0;
  for (let y = 0; y < height; y++) {
    raw[rawPos++] = 0;
    pixels.copy(raw, rawPos, y * stride, (y + 1) * stride);
    rawPos += stride;
  }
  const compressed = zlib.deflateSync(raw, { level: 9 });
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

// High-quality bilinear resize with premultiplied alpha
function resizeRgba(srcBuf, srcW, srcH, dstW, dstH, padFraction = 0) {
  const dstBuf = Buffer.alloc(dstW * dstH * 4);
  
  // Available area after padding
  const innerDstW = dstW * (1 - padFraction * 2);
  const innerDstH = dstH * (1 - padFraction * 2);
  const scale = Math.min(innerDstW / srcW, innerDstH / srcH);
  
  const targetW = srcW * scale;
  const targetH = srcH * scale;
  const offsetX = (dstW - targetW) / 2;
  const offsetY = (dstH - targetH) / 2;

  for (let dy = 0; dy < dstH; dy++) {
    const syReal = (dy - offsetY) / scale;
    if (syReal < 0 || syReal >= srcH - 1) continue;
    
    const sy0 = Math.floor(syReal);
    const sy1 = Math.min(sy0 + 1, srcH - 1);
    const fy = syReal - sy0;

    for (let dx = 0; dx < dstW; dx++) {
      const sxReal = (dx - offsetX) / scale;
      if (sxReal < 0 || sxReal >= srcW - 1) continue;

      const sx0 = Math.floor(sxReal);
      const sx1 = Math.min(sx0 + 1, srcW - 1);
      const fx = sxReal - sx0;

      // Sample 4 surrounding pixels
      const idx00 = (sy0 * srcW + sx0) * 4;
      const idx10 = (sy0 * srcW + sx1) * 4;
      const idx01 = (sy1 * srcW + sx0) * 4;
      const idx11 = (sy1 * srcW + sx1) * 4;

      const w00 = (1 - fx) * (1 - fy);
      const w10 = fx * (1 - fy);
      const w01 = (1 - fx) * fy;
      const w11 = fx * fy;

      const a = (srcBuf[idx00 + 3] * w00) + (srcBuf[idx10 + 3] * w10) +
                (srcBuf[idx01 + 3] * w01) + (srcBuf[idx11 + 3] * w11);

      if (a < 2) continue;

      const r = (srcBuf[idx00] * w00) + (srcBuf[idx10] * w10) +
                (srcBuf[idx01] * w01) + (srcBuf[idx11] * w11);
      const g = (srcBuf[idx00 + 1] * w00) + (srcBuf[idx10 + 1] * w10) +
                (srcBuf[idx01 + 1] * w01) + (srcBuf[idx11 + 1] * w11);
      const b = (srcBuf[idx00 + 2] * w00) + (srcBuf[idx10 + 2] * w10) +
                (srcBuf[idx01 + 2] * w01) + (srcBuf[idx11 + 2] * w11);

      const dstIdx = (dy * dstW + dx) * 4;
      dstBuf[dstIdx] = Math.round(r);
      dstBuf[dstIdx + 1] = Math.round(g);
      dstBuf[dstIdx + 2] = Math.round(b);
      dstBuf[dstIdx + 3] = Math.round(a);
    }
  }

  return dstBuf;
}

// Create Windows .ICO file from 32x32 PNG buffer
function createIco(png32Buf) {
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // Count = 1 image

  const dirEntry = Buffer.alloc(16);
  dirEntry[0] = 32; // Width
  dirEntry[1] = 32; // Height
  dirEntry[2] = 0;  // Color count
  dirEntry[3] = 0;  // Reserved
  dirEntry.writeUInt16LE(1, 4);  // Color planes
  dirEntry.writeUInt16LE(32, 6); // Bits per pixel
  dirEntry.writeUInt32LE(png32Buf.length, 8); // Image size
  dirEntry.writeUInt32LE(22, 12); // Image offset (6 + 16 = 22)

  return Buffer.concat([icoHeader, dirEntry, png32Buf]);
}

// Load original logo-mark
const origMark = decodePng('public/logo-mark.original.png');
const { width: W, height: H, pixels: origPixels } = origMark;

console.log(`Original logo-mark size: ${W} x ${H}`);

// 1. Recolor on EXACT 869 x 496 canvas so logo size on site remains exactly the same
const recoloredExact = Buffer.alloc(W * H * 4);

let minX = W, maxX = 0, minY = H, maxY = 0;

for (let y = 0; y < H; y++) {
  const t = y / H;
  
  // K: Vibrant Royal-Electric Blue gradient (#3B82F6 -> #1D6AE5)
  const kR = Math.round(59 - t * 30);
  const kG = Math.round(130 - t * 24);
  const kB = Math.round(246 - t * 17);

  // D & Arrow: Radiant Electric Cyan gradient (#00F0FF -> #00B4D8)
  const dR = 0;
  const dG = Math.round(240 - t * 60);
  const dB = 255;

  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    const r = origPixels[idx];
    const g = origPixels[idx + 1];
    const b = origPixels[idx + 2];
    const a = origPixels[idx + 3];

    if (a < 8) continue;

    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;

    const normG = (g * 255) / a;
    const normB = (b * 255) / a;
    const isNavy = normG < 95 && normB < 165;

    if (isNavy) {
      recoloredExact[idx] = kR;
      recoloredExact[idx + 1] = kG;
      recoloredExact[idx + 2] = kB;
    } else {
      recoloredExact[idx] = dR;
      recoloredExact[idx + 1] = dG;
      recoloredExact[idx + 2] = dB;
    }
    recoloredExact[idx + 3] = a;
  }
}

// Save logo-mark.png with exact original 869 x 496 dimensions
const encodedExactLogoMark = encodePng(W, H, recoloredExact);
fs.writeFileSync('public/logo-mark.png', encodedExactLogoMark);
console.log('Saved public/logo-mark.png (869 x 496, exact original canvas size)');

// Extract tight content for favicon generation
const contentW = (maxX - minX) + 1;
const contentH = (maxY - minY) + 1;
const contentPixels = Buffer.alloc(contentW * contentH * 4);

for (let y = 0; y < contentH; y++) {
  const sy = minY + y;
  for (let x = 0; x < contentW; x++) {
    const sx = minX + x;
    const srcIdx = (sy * W + sx) * 4;
    const dstIdx = (y * contentW + x) * 4;
    contentPixels[dstIdx] = recoloredExact[srcIdx];
    contentPixels[dstIdx + 1] = recoloredExact[srcIdx + 1];
    contentPixels[dstIdx + 2] = recoloredExact[srcIdx + 2];
    contentPixels[dstIdx + 3] = recoloredExact[srcIdx + 3];
  }
}

console.log(`Content bounding box: ${contentW} x ${contentH}`);

// 2. Generate 512x512 icon.png
const p512 = resizeRgba(contentPixels, contentW, contentH, 512, 512, 0.06);
const png512 = encodePng(512, 512, p512);
fs.writeFileSync('public/icon.png', png512);
console.log('Saved public/icon.png (512 x 512)');

// 3. Generate 180x180 apple-icon.png
const p180 = resizeRgba(contentPixels, contentW, contentH, 180, 180, 0.08);
const png180 = encodePng(180, 180, p180);
fs.writeFileSync('public/apple-icon.png', png180);
console.log('Saved public/apple-icon.png (180 x 180)');

// 4. Generate 32x32 favicon-32x32.png
const p32 = resizeRgba(contentPixels, contentW, contentH, 32, 32, 0.04);
const png32 = encodePng(32, 32, p32);
fs.writeFileSync('public/favicon-32x32.png', png32);
console.log('Saved public/favicon-32x32.png (32 x 32)');

// 5. Generate favicon.ico
const icoBuf = createIco(png32);
fs.writeFileSync('public/favicon.ico', icoBuf);
console.log('Saved public/favicon.ico');

// 6. Generate icon.svg with high-res base64
const b64 = png512.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,${b64}" width="512" height="512" />
</svg>
`;
fs.writeFileSync('public/icon.svg', svg);
console.log('Saved public/icon.svg');

console.log('All favicon and logo assets updated successfully!');
