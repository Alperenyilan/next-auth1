'use client';
import * as React from 'react';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navbar />
      <main className="max-w-4xl mx-auto py-8 px-4">{children}</main>
    </SessionProvider>
  );
} 