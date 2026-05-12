"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiSparkles } from 'react-icons/hi';
import { cn } from '@/lib/utils';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.04 },
    },
};

const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
    },
};

// Maps bgClass from config to chip/ring tones for the "hot" accent.
const accentByBg = {
    'bg-blue-500/10': {
        ring: 'ring-blue-500/30',
        dot: 'text-blue-400',
        hotBg: 'bg-blue-500/10',
    },
    'bg-emerald-500/10': {
        ring: 'ring-emerald-500/30',
        dot: 'text-emerald-400',
        hotBg: 'bg-emerald-500/10',
    },
    'bg-orange-500/10': {
        ring: 'ring-orange-500/30',
        dot: 'text-orange-400',
        hotBg: 'bg-orange-500/10',
    },
};

const SkillChip = ({ skill, accent }) => (
    <motion.span
        variants={itemAnimation}
        className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-zinc-300',
            'border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm',
            'transition-colors duration-200 hover:border-zinc-700 hover:text-white',
            skill.hot && `ring-1 ${accent.ring} ${accent.hotBg}`
        )}
    >
        {skill.hot && (
            <HiSparkles className={cn('w-3.5 h-3.5', accent.dot)} aria-hidden />
        )}
        {skill.name}
    </motion.span>
);

const CategoryRow = ({ category }) => {
    const accent = accentByBg[category.bgClass] || {
        ring: 'ring-primary/30',
        dot: 'text-primary',
        hotBg: 'bg-primary/10',
    };

    return (
        <motion.div
            variants={itemAnimation}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-6 border-b border-zinc-900/80 last:border-b-0"
        >
            <div className="flex items-center gap-3">
                <div className={cn('p-2 rounded-lg', category.bgClass)}>
                    <div className={cn('w-4 h-4 flex items-center justify-center', category.iconClass)}>
                        {category.icon}
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-zinc-200">{category.title}</h3>
                    <p className="text-xs text-zinc-500">{category.description}</p>
                </div>
            </div>

            <motion.div
                variants={containerAnimation}
                className="flex flex-wrap gap-2 items-start"
            >
                {category.skills.map((skill, idx) => (
                    <SkillChip key={idx} skill={skill} accent={accent} />
                ))}
            </motion.div>
        </motion.div>
    );
};

const SkillsSection = () => {
    const skills = config.skills;

    return (
        <section className="py-20" id="skills">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-10"
                >
                    <div className="max-w-xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.5px] border-zinc-900/70 px-3 py-1.5 rounded-full text-zinc-300 backdrop-blur-sm"
                        >
                            <HiChip className="w-4 h-4" />
                            <span className="text-xs font-medium">Skills & Technologies</span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-2xl md:text-3xl font-semibold text-primary tracking-tight">
                                What I work with
                            </h2>
                            <p className="text-sm text-zinc-500">
                                Tools and technologies I use to ship things.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={containerAnimation} className="divide-y divide-zinc-900/80">
                        {skills.map((category, index) => (
                            <CategoryRow key={index} category={category} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
