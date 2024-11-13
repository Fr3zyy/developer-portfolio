import React from 'react';
import { Button } from '@/components/ui/button';
import { HiArrowRight, HiCode } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { titleAnimation } from './Animations';

const SectionTitle = () => (
    <motion.div
        initial="hidden"
        animate="show"
        variants={titleAnimation}
        className="mb-16 space-y-6"
    >

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
                    Featured Work & Projects
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    A curated selection of my professional work and personal projects,
                    showcasing expertise in{' '}
                    <span className="text-primary">full-stack development</span>,{' '}
                    <span className="text-primary">UI/UX design</span>, and{' '}
                    <span className="text-primary">cloud architecture</span>.
                </p>
            </div>

            <div className="flex items-center">
                <Button
                    variant="expandIcon"
                    Icon={HiArrowRight}
                    iconPlacement="right"
                    className="w-full md:w-auto rounded-2xl px-4 sm:px-5 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 shadow-lg shadow-primary/5 hover:shadow-primary/10"
                    asChild
                >
                    <a
                        href={`https://github.com/${config.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium"
                    >
                        View Github
                    </a>
                </Button>
            </div>
        </div>

        <div className="flex items-center gap-6 pt-2 overflow-x-auto pb-2 scrollbar-hide">
            <div className="space-y-1 flex-shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-primary">10+</span>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    Projects Completed
                </p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-primary/10 flex-shrink-0" />
            <div className="space-y-1 flex-shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-primary">3+</span>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    Years Experience
                </p>
            </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5" />
    </motion.div>
);

export default SectionTitle;