'use client';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.scss'; // SCSS dosyasını import ettik
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          {/* Header */}
          <header>
            <h1>Movie Finder</h1>
          </header>
          {/* Main Content */}
          <main>
            {children}
          </main>
          {/* Footer */}
          <footer>
            <p>&copy; 2024 Movie Finder. Developed by Semih Kalaycı.</p>
          </footer>
        </body>
      </html>
    </Provider>
  );
}
