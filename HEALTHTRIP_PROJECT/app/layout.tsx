import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/cart-context';
import { NavBar } from '@/components/nav-bar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s | StyleHub',
    default: 'StyleHub - Discover Your Fashion',
  },
  description: 'Explore premium fashion collections with curated styles and exclusive deals.',
  openGraph: {
    title: 'StyleHub - Fashion Redefined',
    description: 'Your destination for modern fashion trends',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }]
  },
  keywords: ['fashion', 'clothing', 'style', 'ecommerce'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <NavBar />
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}