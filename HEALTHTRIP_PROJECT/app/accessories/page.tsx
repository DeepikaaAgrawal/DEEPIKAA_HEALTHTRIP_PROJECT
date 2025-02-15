'use client';

import { ProductCard } from '@/components/product-card';

const accessories = [
  {
    id: "a1",
    name: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    rating: 5
  },
  {
    id: "a2",
    name: "Leather Belt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    rating: 4
  },
  {
    id: "a3",
    name: "Silver Necklace",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    rating: 5
  }
];

export default function AccessoriesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Accessories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accessories.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}