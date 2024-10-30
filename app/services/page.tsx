import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Music4, Palette, Film } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing with creative transitions, effects, and color grading.',
    price: 'Starting at $200',
  },
  {
    icon: Music4,
    title: 'Music Production',
    description: 'Custom music production and mixing services for artists and events.',
    price: 'Starting at $300',
  },
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Unique and memorable logo designs for your brand or event.',
    price: 'Starting at $150',
  },
  {
    icon: Film,
    title: 'Event Coverage',
    description: 'Full event coverage with professional video and photo documentation.',
    price: 'Starting at $500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4">
          Services
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Professional creative services tailored to your needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{service.price}</span>
                  <Button asChild>
                    <Link href="/contact">Book Now</Link>
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