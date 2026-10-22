const fs = require('fs');
const zlib = require('zlib');

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

// 1. Process logo-mark
console.log('Recoloring logo-mark...');
const mark = decodePng('public/logo-mark.original.png');

let minX = mark.width, maxX = 0, minY = mark.height, maxY = 0;
for (let y = 0; y < mark.height; y++) {
  for (let x = 0; x < mark.width; x++) {
    const a = mark.pixels[(y * mark.width + x) * 4 + 3];
    if (a > 15) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const pad = 16;
const cropX = Math.max(0, minX - pad);
const cropY = Math.max(0, minY - pad);
const cropW = Math.min(mark.width - cropX, (maxX - minX) + pad * 2);
const cropH = Math.min(mark.height - cropY, (maxY - minY) + pad * 2);

const cropped = Buffer.alloc(cropW * cropH * 4);

for (let cy = 0; cy < cropH; cy++) {
  const sy = cropY + cy;
  const t = cy / cropH;

  // K: Electric Royal Blue gradient (#3B82F6 -> #1D6AE5)
  const kR = Math.round(59 - t * 30);
  const kG = Math.round(130 - t * 24);
  const kB = Math.round(246 - t * 17);

  // D & Arrow: Radiant Electric Cyan gradient (#00F0FF -> #00B4D8)
  const dR = 0;
  const dG = Math.round(240 - t * 60);
  const dB = 255;

  for (let cx = 0; cx < cropW; cx++) {
    const sx = cropX + cx;
    const srcIdx = (sy * mark.width + sx) * 4;
    const dstIdx = (cy * cropW + cx) * 4;

    const r = mark.pixels[srcIdx];
    const g = mark.pixels[srcIdx + 1];
    const b = mark.pixels[srcIdx + 2];
    const a = mark.pixels[srcIdx + 3];

    if (a < 8) continue;

    const normG = (g * 255) / a;
    const normB = (b * 255) / a;
    const isNavy = normG < 95 && normB < 165;

    if (isNavy) {
      cropped[dstIdx] = kR;
      cropped[dstIdx + 1] = kG;
      cropped[dstIdx + 2] = kB;
      cropped[dstIdx + 3] = a;
    } else {
      cropped[dstIdx] = dR;
      cropped[dstIdx + 1] = dG;
      cropped[dstIdx + 2] = dB;
      cropped[dstIdx + 3] = a;
    }
  }
}

fs.writeFileSync('public/logo-mark.png', encodePng(cropW, cropH, cropped));
console.log('Saved public/logo-mark.png');

// 2. Process logo.png
console.log('Recoloring logo.png...');
const full = decodePng('public/logo.original.png');

let fMinX = full.width, fMaxX = 0, fMinY = full.height, fMaxY = 0;
for (let y = 0; y < full.height; y++) {
  for (let x = 0; x < full.width; x++) {
    const a = full.pixels[(y * full.width + x) * 4 + 3];
    if (a > 15) {
      if (x < fMinX) fMinX = x;
      if (x > fMaxX) fMaxX = x;
      if (y < fMinY) fMinY = y;
      if (y > fMaxY) fMaxY = y;
    }
  }
}

const fCropX = Math.max(0, fMinX - pad);
const fCropY = Math.max(0, fMinY - pad);
const fCropW = Math.min(full.width - fCropX, (fMaxX - fMinX) + pad * 2);
const fCropH = Math.min(full.height - fCropY, (fMaxY - fMinY) + pad * 2);

const fCropped = Buffer.alloc(fCropW * fCropH * 4);

for (let cy = 0; cy < fCropH; cy++) {
  const sy = fCropY + cy;
  const t = cy / fCropH;

  const kR = Math.round(59 - t * 30);
  const kG = Math.round(130 - t * 24);
  const kB = Math.round(246 - t * 17);

  const dR = 0;
  const dG = Math.round(240 - t * 60);
  const dB = 255;

  for (let cx = 0; cx < fCropW; cx++) {
    const sx = fCropX + cx;
    const srcIdx = (sy * full.width + sx) * 4;
    const dstIdx = (cy * fCropW + cx) * 4;

    const r = full.pixels[srcIdx];
    const g = full.pixels[srcIdx + 1];
    const b = full.pixels[srcIdx + 2];
    const a = full.pixels[srcIdx + 3];

    if (a < 8) continue;

    const isText = sy > 430;

    if (isText) {
      // "KD" (sx < 240) in Electric Cyan #00D2FF, "INFOVISION" in Royal Blue #2563EB
      // Both are bright on dark and readable on white!
      if (sx < 240) {
        fCropped[dstIdx] = 0;
        fCropped[dstIdx + 1] = 210;
        fCropped[dstIdx + 2] = 255;
      } else {
        fCropped[dstIdx] = 37;
        fCropped[dstIdx + 1] = 99;
        fCropped[dstIdx + 2] = 235;
      }
      fCropped[dstIdx + 3] = a;
    } else {
      const normG = (g * 255) / a;
      const normB = (b * 255) / a;
      const isNavy = normG < 95 && normB < 165;

      if (isNavy) {
        fCropped[dstIdx] = kR;
        fCropped[dstIdx + 1] = kG;
        fCropped[dstIdx + 2] = kB;
      } else {
        fCropped[dstIdx] = dR;
        fCropped[dstIdx + 1] = dG;
        fCropped[dstIdx + 2] = dB;
      }
      fCropped[dstIdx + 3] = a;
    }
  }
}

fs.writeFileSync('public/logo.png', encodePng(fCropW, fCropH, fCropped));
console.log('Saved public/logo.png');

fs.copyFileSync('public/logo-mark.png', 'public/icon.png');
console.log('Saved public/icon.png');

const markBase64 = fs.readFileSync('public/logo-mark.png').toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${cropW} ${cropH}" width="100%" height="100%">
  <image href="data:image/png;base64,${markBase64}" width="${cropW}" height="${cropH}" />
</svg>
`;
fs.writeFileSync('public/icon.svg', svg);
console.log('Saved public/icon.svg');
console.log('Complete!');
