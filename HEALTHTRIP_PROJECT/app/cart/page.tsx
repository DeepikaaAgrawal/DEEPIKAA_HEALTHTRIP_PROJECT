'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  
  if (totalItems === 0) {
    return (
      <div className="container py-16 flex flex-col items-center justify-center min-h-[50vh]">
        <ShoppingBag className="h-16 w-16 text-muted mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added any items yet</p>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <span className="ml-2 text-muted-foreground">({totalItems} items)</span>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
              <div className="relative aspect-square h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground">Unit price: ₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label htmlFor={`quantity-${item.id}`} className="text-sm">Qty:</label>
                    <Input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      className="w-16 h-8"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value) && value >= 0) {
                          updateQuantity(item.id, value);
                        }
                      }}
                    />
                  </div>
                  <p className="font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
            
            <Button variant="ghost" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>
        
        <div className="bg-muted/50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping estimate</span>
              <span>₹499</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax estimate</span>
              <span>₹{(totalPrice * 0.18).toLocaleString('en-IN')}</span>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-semibold">
              <span>Order total</span>
              <span>₹{(totalPrice + 499 + totalPrice * 0.18).toLocaleString('en-IN')}</span>
            </div>
          </div>
          
          <Button className="w-full">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
}