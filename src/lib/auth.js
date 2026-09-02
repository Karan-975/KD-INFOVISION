import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'kd_infovision_super_secret_jwt_key_2026_modern_dynamic_cms';

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

export function getAdminUserFromRequest(request) {
  try {
    const authHeader = request.headers.get('authorization');
    let token = null;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    } else {
      const cookieStore = cookies();
      token = cookieStore.get('admin_token')?.value;
    }

    if (!token) return null;
    return verifyToken(token);
  } catch (error) {
    return null;
  }
}
