/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiMusicNote } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const LanyardPlayer = () => {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket('wss://api.lanyard.rest/socket');
    
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: config.social.discord,
          },
        })
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
        const presence = data.d;
        if (presence.spotify) {
          setActivity(presence.spotify);
        } else {
          setActivity(null);
        }
        setLoading(false);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-secondary/10 border-[1.8px] border-zinc-900/70 p-4 rounded-xl backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <HiMusicNote className="w-5 h-5 text-green-500 animate-spin" />
          <span className="text-sm font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  if (!activity) {
    return null;
  }

  return (
    <div className="bg-secondary/10 border-[1.8px] border-zinc-900/70 p-4 rounded-xl backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <HiMusicNote className="w-5 h-5 text-green-500" />
        <span className="text-sm font-medium">Now Playing on Spotify</span>
      </div>
      <div className="flex items-center gap-4">
        {activity.album_art_url && (
          <img 
            src={activity.album_art_url} 
            alt={activity.album}
            className="w-16 h-16 rounded-lg"
          />
        )}
        <div className="flex flex-col">
          <span className="font-medium text-primary">
            {activity.song}
          </span>
          <span className="text-sm text-muted-foreground">
            by {activity.artist}
          </span>
          <span className="text-xs text-muted-foreground mt-1">
            on {activity.album}
          </span>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
            variants={itemAnimation}
            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
          >
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-7xl font-bold tracking-tight"
            >
              <motion.span
                variants={textAnimation}
                className="block text-primary mb-2"
              >
                Hi, I'm {config.developer.name}
              </motion.span>
              <motion.span
                variants={textAnimation}
                className="block text-white/60 text-2xl md:text-4xl"
              >
                I build things for the web
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            <Link href={"/projects"}>
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="mt-12 max-w-md mx-auto"
          >
            <LanyardPlayer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;