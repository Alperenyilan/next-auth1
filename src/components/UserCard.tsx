import * as React from 'react';

type User = {
  name?: string;
  email?: string;
  image?: string;
  role?: string;
};

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-4 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow">
      <img src={user.image || '/logo.svg'} alt="avatar" className="w-16 h-16 rounded-full border" />
      <div>
        <div className="font-bold text-lg text-blue-800">{user.name}</div>
        <div className="text-slate-600">{user.email}</div>
        <div className="text-xs mt-1 px-2 py-1 bg-blue-200 text-blue-800 rounded inline-block">Rol: {user.role}</div>
      </div>
    </div>
  );
} 