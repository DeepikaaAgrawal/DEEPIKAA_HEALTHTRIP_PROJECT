'use client';

import { ProductCard } from '@/components/product-card';

const menProducts = [
  {
    id: "m1",
    name: "Classic Oxford Shirt",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    rating: 5
  },
  {
    id: "m2",
    name: "Leather Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    rating: 4
  },
  {
    id: "m3",
    name: "Premium Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    rating: 5
  }
];

export default function MensPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Men's Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}