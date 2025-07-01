'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center justify-between py-4 mb-8 border-b border-slate-300">
      <Link href="/">
        <span className="font-bold text-xl text-blue-700 ">Ana Sayfa</span>
      </Link>
      <div className="flex items-center gap-4">
        {session?.user ? (
          <>
            <span className="text-slate-700">{session.user.name} ({session.user.role})</span>
            <img src={session.user.image || '/logo.svg'} alt="avatar" className="w-8 h-8 rounded-full border" />
            <button onClick={() => signOut()} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Çıkış</button>
            {session.user.role === 'admin' && (
              <Link href="/admin" className="text-blue-600 hover:underline">Admin Panel</Link>
            )}
            <Link href="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
          </>
        ) : (
          <Link href="/auth/login" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Giriş Yap</Link>
        )}
      </div>
    </nav>
  );
} 