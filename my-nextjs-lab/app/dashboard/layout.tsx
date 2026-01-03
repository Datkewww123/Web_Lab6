// app/dashboard/layout.tsx
import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fff', color: '#000' }}>
      <aside style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px', borderRight: '1px solid #ddd' }}>
        <h2 style={{ color: '#333' }}>Dashboard</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link href="/dashboard" style={{ color: '#0070f3' }}>Overview</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/dashboard/settings" style={{ color: '#0070f3' }}>Settings</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/dashboard/image-test" style={{ color: '#0070f3' }}>Image Test</Link></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>{children}</main>
    </div>
  );
}