'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ShoppingCart, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/context/cart-context';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
}

export function ProductCard({ id, name, price, image, rating }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast.success("Added to cart", {
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/60 backdrop-blur-sm"
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>
      
      <CardHeader className="p-4">
        <h3 className="font-medium text-lg line-clamp-1">{name}</h3>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-2xl font-bold">₹{price.toLocaleString('en-IN')}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}