'use client';
import * as React from 'react';
import { signIn } from 'next-auth/react';
import LoadingSpinner from '../../../components/LoadingSpinner';
import Alert from '../../../components/Alert';

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signIn('auth0');
    } catch {
      setError('Giriş sırasında bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Hoş Geldin!</h1>
      <p className="mb-8 text-slate-600">Devam etmek için giriş yapmalısın.</p>
      {error && <Alert type="error" message={error} />}
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow hover:scale-105 transition flex items-center gap-2"
        disabled={loading}
      >
        {loading && <LoadingSpinner />}
        Auth0 ile Giriş Yap
      </button>
    </div>
  );
} 