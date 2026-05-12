"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiHome } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { config } from '@/config';

export default function NotFound() {
    return (
        <section className="min-h-[calc(100vh-220px)] flex items-center justify-center relative overflow-hidden">
            <BackgroundPresets.Minimal />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto text-center space-y-8 relative"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-secondary/10 border-[1.5px] border-zinc-900/70 px-3 py-1.5 rounded-full text-zinc-300 backdrop-blur-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-medium">Error 404 - Page not found</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative"
                    >
                        <h1 className="text-[10rem] md:text-[14rem] font-bold leading-none tracking-tighter bg-gradient-to-b from-primary to-primary/20 bg-clip-text text-transparent select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
                            <div className="w-full h-full bg-gradient-to-br from-primary/40 via-transparent to-primary/10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                            This page got lost in the void
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                            The page you are looking for does not exist, has been moved, or never
                            existed in the first place. Let us get you back on track.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-wrap gap-3 justify-center pt-2"
                    >
                        <Link href="/">
                            <Button
                                variant="expandIcon"
                                Icon={HiHome}
                                iconPlacement="right"
                                className="rounded-full px-5 py-5 text-sm font-semibold transition-all duration-300 hover:scale-105"
                            >
                                Back home
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button
                                variant="outline"
                                className="rounded-full px-5 py-5 text-sm font-semibold border-zinc-800 hover:border-zinc-700"
                            >
                                <HiArrowLeft className="w-4 h-4 mr-2" />
                                See projects
                            </Button>
                        </Link>
                        <a
                            href={`https://github.com/${config.social.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="ghost"
                                className="rounded-full px-5 py-5 text-sm font-semibold text-muted-foreground hover:text-primary"
                            >
                                <FaGithub className="w-4 h-4 mr-2" />
                                GitHub
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
