import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import clientPromise from '../../../../lib/mongodb';

// Kullanıcı listesini döner
export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token || token.role !== 'admin') {
    return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 });
  }
  const client = await clientPromise;
  const db = client.db();
  // Sadece gerekli alanları döndür
  const users = await db.collection('users').find({}, { projection: { email: 1, name: 1, role: 1, image: 1 } }).toArray();
  return NextResponse.json(users);
}

// Kullanıcı rolünü günceller (email ile)
export async function PATCH(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token || token.role !== 'admin') {
    return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 });
  }
  const { email, roleName } = await req.json();
  const client = await clientPromise;
  const db = client.db();
  await db.collection('users').updateOne(
    { email: email },
    { $set: { role: roleName } }
  );
  return NextResponse.json({ success: true });
} 