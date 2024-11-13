"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 relative">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 border-white px-4 py-2 rounded-full text-primary backdrop-blur-sm">
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              <span className="block text-primary mb-2">
                Hi, I'm {config.developer.name}
              </span>
              <span className="block text-white/60 text-2xl md:text-4xl">
                I build things for the web
              </span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link href={"/projects"}>
              <Button variant={"expandIcon"} Icon={HiArrowRight} iconPlacement="right" className="rounded-full px-6 py-6 text-base transition-all duration-300">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 