'use client';

import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/context/cart-context';

export function NavBar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-xl mr-auto">
          StyleHub
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 mx-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Products
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Sale
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium">
                  Products
                </Link>
                <Link href="/" className="text-lg font-medium">
                  Categories
                </Link>
                <Link href="/" className="text-lg font-medium">
                  Sale
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}