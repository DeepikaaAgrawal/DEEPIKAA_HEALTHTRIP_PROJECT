'use client';

import { ProductCard } from '@/components/product-card';

const allProducts = [
  {
    id: "1",
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    rating: 5
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
    rating: 4
  },
  {
    id: "3",
    name: "Leather Backpack",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    rating: 5
  },
  {
    id: "w1",
    name: "Floral Summer Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    rating: 4
  },
  {
    id: "m1",
    name: "Classic Oxford Shirt",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    rating: 5
  },
  {
    id: "a1",
    name: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    rating: 5
  }
];

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}