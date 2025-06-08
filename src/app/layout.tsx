import React from 'react';
import './globals.css';

export const metadata = {
  title: 'FMM Graphics',
  description: 'Професійна графіка та дизайн',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">FMM Graphics</h1>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} FMM Graphics. Всі права захищені.</p>
        </footer>
      </body>
    </html>
  )
}