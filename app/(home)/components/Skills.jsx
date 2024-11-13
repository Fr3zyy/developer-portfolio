"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiSparkles, HiCode, HiDatabase, HiCube } from 'react-icons/hi';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { config } from '@/config';

const getLevelPercentage = (level) => {
    switch (level) {
        case 'Expert': return 95;
        case 'Advanced': return 85;
        case 'Intermediate': return 70;
        case 'Beginner': return 50;
        default: return 75;
    }
};

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const SkillCard = ({ skill, bgClass }) => {
    const levelPercentage = getLevelPercentage(skill.level);
    const gradientClass = {
        'bg-blue-500/10': 'from-blue-500/80 to-blue-500',
        'bg-emerald-500/10': 'from-emerald-500/80 to-emerald-500',
        'bg-orange-500/10': 'from-orange-500/80 to-orange-500'
    }[bgClass] || 'from-primary/80 to-primary';

    return (
        <motion.div
            variants={itemAnimation}
            className="relative flex flex-col h-full"
        >
            <div className="relative h-full p-4 rounded-xl border border-zinc-800/50
                          hover:border-zinc-700/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-medium text-primary/90">
                        {skill.name}
                    </h3>
                    {skill.hot && (
                        <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 border-none px-2 py-0 text-xs">
                            <HiSparkles className="w-3 h-3 mr-1" />
                            Hot
                        </Badge>
                    )}
                </div>

                <div className="h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${levelPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={cn("h-full bg-gradient-to-r rounded-full", gradientClass)}
                    />
                </div>

                <div className="mt-2 flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium text-primary">{skill.level}</span>
                </div>
            </div>
        </motion.div>
    );
};

const CategorySection = ({ category }) => (
    <div className="space-y-6">
        <div className="flex items-center gap-3">
            <div className={cn("p-2.5 rounded-xl", category.bgClass)}>
                <div className={cn("w-5 h-5", category.iconClass)}>
                    {category.icon}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} bgClass={category.bgClass} />
            ))}
        </div>
    </div>
);

const SkillsSection = () => {
    const skills = config.skills;

    return (
        <section className="py-24" id="skills">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <HiChip className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Skills & Technologies
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Technical Proficiency
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                A comprehensive overview of my technical expertise across various
                                development domains and tools.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        className="space-y-16"
                    >
                        {skills.map((category, index) => (
                            <CategorySection key={index} category={category} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;