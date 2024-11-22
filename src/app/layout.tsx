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
        <header className="bg-blue-500 text-white p-4 text-center">
          <h1 className="text-3xl font-bold">Movie Finder</h1>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
          <p>&copy; 2024 Movie Finder. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
