import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Protocol Architect | Blockchain & AI Systems Expert',
  description: 'Expert in building verifiable, intelligent systems at the intersection of AI and blockchain. Specializing in smart contract security, zero-knowledge proofs, and distributed systems.',
  keywords: 'Blockchain, AI, Smart Contracts, ZK-Proofs, Rust, Elixir, Solidity, Protocol Architecture',
  authors: [{ name: 'Prakash Yadav' }],
  openGraph: {
    title: 'Protocol Architect | Blockchain & AI Systems Expert',
    description: 'Expert in building verifiable, intelligent systems at the intersection of AI and blockchain.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Protocol Architect Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protocol Architect | Blockchain & AI Systems Expert',
    description: 'Expert in building verifiable, intelligent systems at the intersection of AI and blockchain.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}