"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

export function HeroSection({
  backgroundImage,
  children,
  className,
  overlay = true,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          filter: overlay ? "brightness(0.3)" : undefined,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-4 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}