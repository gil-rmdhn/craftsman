import type { Metadata } from 'next';
import Header from '../components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Product Store',
  description: 'Latest products available',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
