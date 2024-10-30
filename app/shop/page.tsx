import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'DJ Xemmour T-Shirt',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
    description: 'Limited edition DJ Xemmour branded t-shirt',
  },
  {
    name: 'Vinyl Collection',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=800&auto=format&fit=crop&q=60',
    description: 'Exclusive vinyl collection featuring top mixes',
  },
  {
    name: 'Snapback Cap',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&auto=format&fit=crop&q=60',
    description: 'Premium embroidered DJ Xemmour snapback',
  },
  {
    name: 'LED Wristband',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1550029402-226115b7c579?w=800&auto=format&fit=crop&q=60',
    description: 'Interactive LED wristband for events',
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4">
          Merchandise
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Official DJ Xemmour merchandise and collectibles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-primary">{product.price}</span>
                  <Button size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}