'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Truck, Shield, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/product-card';

const featuredProducts = [
  {
    id: "1",
    name: "Classic White Sneakers",
    price: 7499,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    rating: 5
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 10999,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
    rating: 4
  },
  {
    id: "3",
    name: "Leather Backpack",
    price: 12499,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    rating: 5
  }
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
            alt="Fashion hero"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
        </div>
        
        <div className="container relative z-10 flex flex-col items-start gap-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold max-w-2xl">
            Discover Your Perfect Style
          </h1>
          <p className="text-xl md:text-2xl max-w-xl text-gray-100">
            Explore our curated collection of premium fashion essentials
          </p>
          <div className="w-full max-w-lg">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full bg-white/90 backdrop-blur-sm text-black pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Women's Collection",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
                link: "/womens"
              },
              {
                title: "Men's Collection",
                image: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
                link: "/mens"
              },
              {
                title: "Accessories",
                image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
                link: "/accessories"
              }
            ].map((category) => (
              <Link 
                key={category.title} 
                href={category.link}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 group-hover:text-white transition-colors">
                    Shop Collection <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild>
              <Link href="/products">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "Premium Selection",
                description: "Curated collection of luxury fashion items"
              },
              {
                icon: Truck,
                title: "Free Shipping",
                description: "On orders over ₹7,500"
              },
              {
                icon: Shield,
                title: "Secure Payment",
                description: "100% secure payment processing"
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "2-3 business days delivery"
              }
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive offers and style updates
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </main>
  );
}