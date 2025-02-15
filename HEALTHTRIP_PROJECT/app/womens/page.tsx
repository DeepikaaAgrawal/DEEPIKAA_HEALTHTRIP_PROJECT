'use client';

import { ProductCard } from '@/components/product-card';

const womenProducts = [
  {
    id: "w1",
    name: "Floral Summer Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    rating: 4
  },
  {
    id: "w2",
    name: "Classic Blazer",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8",
    rating: 5
  },
  {
    id: "w3",
    name: "Designer Handbag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    rating: 4
  }
];

export default function WomensPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Women's Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {womenProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}