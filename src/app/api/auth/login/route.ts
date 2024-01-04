import bcrypt from 'bcrypt';
import prisma from '@/lib/client';
import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';
import cookie from 'cookie';

export async function POST(req: Request, res: Response) {
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return new Response('Invalid email or password', { status: 401 });
  }
  const passwordMatch = await bcrypt.compare(password, user.password || '');

  if (!passwordMatch) {
    return new Response('Invalid email or password', { status: 401 });
  }

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime('1m')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY || ''));

  const cookieSerialized = cookie.serialize('user-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  return new Response('success', {
    headers: {
      'Set-Cookie': cookieSerialized,
    },
  });
}
