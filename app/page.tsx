"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Pause, Calendar, Music } from 'lucide-react';
import Link from 'next/link';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection backgroundImage="https://images.unsplash.com/photo-1571935441005-07cf9a6d9d57?q=80&w=2070">
        <div className="text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            DJ XEMMOUR
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Creating unforgettable experiences through music and visuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Listen to Mixes
            </Button>
          </div>
        </div>
      </HeroSection>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Latest Mix"
            subtitle="Experience the latest sounds and rhythms"
          />
          
          <AnimatedCard className="max-w-4xl mx-auto bg-card/50 backdrop-blur">
            <div className="p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-full md:w-64 h-64 bg-muted rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070")',
                  }}
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-background/90 hover:bg-background/95 transition-all"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </Button>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Summer Vibes 2024</h3>
                <p className="text-muted-foreground mb-4">
                  A journey through deep house and melodic techno
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">120k plays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Released Mar 15, 2024</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join DJ Xemmour at these exclusive venues"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">
                      {`April ${i + 14}, 2024`}
                    </span>
                    <h3 className="text-xl font-bold mt-1">Club Paradise</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Join DJ Xemmour for an unforgettable night of electronic music
                  </p>
                  <Button
                    className="w-full group-hover:bg-primary/90 transition-colors"
                    asChild
                  >
                    <Link href="/contact">Get Tickets</Link>
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}