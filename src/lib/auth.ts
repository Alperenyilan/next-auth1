import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from './mongodb';
import { AdapterUser } from 'next-auth/adapters';

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: `https://${process.env.AUTH0_DOMAIN}`,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 gün
  },
  callbacks: {
    async jwt({ token, user }) {
      // Her zaman MongoDB'den güncel rolü oku
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      if (token.email) {
        const client = await clientPromise;
        const db = client.db();
        const dbUser = await db.collection('users').findOne({ email: token.email });
        token.role = dbUser?.role || 'user';
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as { id?: string; role?: string }).id = token.id as string;
        (session.user as { id?: string; role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions); 