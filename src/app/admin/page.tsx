'use client';
import * as React from 'react';
import { useSession } from 'next-auth/react';
import Alert from '../../components/Alert';
import LoadingSpinner from '../../components/LoadingSpinner';
import { isValidRole } from '../../utils/validation';

type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: { name: string } | null;
};

const ROLES = ['user', 'admin'];

export default function AdminPage() {
  const { data: session } = useSession();
  const user = session?.user as { role?: string } | undefined;
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);

  React.useEffect(() => {
    if (user?.role === 'admin') {
      fetch('/api/admin/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }
  }, [user]);

  const handleRoleChange = async (userId: string, roleName: string) => {
    if (!isValidRole(roleName)) {
      setAlert({ type: 'error', message: 'Geçersiz rol seçimi!' });
      return;
    }
    setLoading(true);
    setAlert(null);
    const res = await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, roleName }),
    });
    if (res.ok) {
      setAlert({ type: 'success', message: 'Rol başarıyla güncellendi.' });
    } else {
      setAlert({ type: 'error', message: 'Rol güncellenemedi.' });
    }
    // Listeyi güncelle
    const updated = await fetch('/api/admin/users').then(res => res.json());
    setUsers(updated);
    setLoading(false);
  };

  if (user?.role !== 'admin') {
    return <div className="text-red-600 font-bold">Bu sayfaya erişim yetkiniz yok.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Admin Paneli</h2>
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <h3 className="font-semibold mb-2">Kullanıcı Listesi</h3>
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2">Ad</th>
              <th className="p-2">Email</th>
              <th className="p-2">Rol</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.role?.name || 'user'}</td>
                <td className="p-2">
                  <select
                    title="Kullanıcı rolü seçimi"
                    value={u.role?.name || 'user'}
                    onChange={e => handleRoleChange(u.id, e.target.value)}
                    disabled={loading}
                    className="border rounded px-2 py-1"
                  >
                    {ROLES.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {alert && <Alert type={alert.type} message={alert.message} />}
      {loading && <LoadingSpinner />}
    </div>
  );
} 