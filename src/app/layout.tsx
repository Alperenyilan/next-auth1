import * as React from 'react';
import '../styles/globals.css';
import ClientLayout from './ClientLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gradient-to-br from-slate-100 to-blue-200 min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 