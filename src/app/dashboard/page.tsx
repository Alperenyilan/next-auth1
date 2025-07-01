'use client';
import * as React from 'react';
import { useSession } from 'next-auth/react';
import UserCard from '../../components/UserCard';

export default function DashboardPage() {
  const { data: session } = useSession();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Dashboard</h2>
      {session?.user && <UserCard user={session.user} />}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">Örnek Kart 1</div>
        <div className="bg-white rounded-lg shadow p-6">Örnek Kart 2</div>
      </div>
    </div>
  );
} 