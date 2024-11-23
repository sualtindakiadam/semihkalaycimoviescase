import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';  // Global stiller

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Movie Finder',
  description: 'Find your favorite movies, TV shows, and episodes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-blue-500 text-white p-4 text-center fixed top-0 left-0 w-full z-10">
          <h1 className="text-3xl font-bold">Movie Finder</h1>
        </header>

        {/* Main Content */}
        <main className="pt-16 pb-16 max-h-screen overflow-y-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-8 fixed bottom-0 left-0 w-full z-10">
          <p>&copy; 2024 Movie Finder. Developed by Semih Kalaycı.</p>
        </footer>
      </body>
    </html>
  );
}
