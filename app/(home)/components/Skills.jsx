"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiCode, HiDatabase, HiCube, HiSparkles } from 'react-icons/hi';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const SkillsSection = () => {
    const skillCategories = config.skills;

    return (
        <section className="py-24 relative" id="skills">
            <div className="container mx-auto px-6">
                <div className="space-y-6 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                    >
                        <HiChip className="w-5 h-5" />
                        <span className="text-sm font-medium">Technical Skills</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary">
                            My Tech Expertise
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Specialized in full-stack development with a focus on modern web technologies
                            and cloud solutions.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemAnimation}
                            className="group"
                        >
                            <Card className="h-full bg-secondary/5 border-secondary/20 overflow-hidden hover:bg-secondary/10 transition-colors duration-300">
                                <div className="p-6 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={cn("p-2.5 rounded-xl", category.bgClass)}>
                                                    <div className={cn("w-6 h-6", category.iconClass)}>
                                                        {category.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-primary">
                                                        {category.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {category.skills.map((skill, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 + idx * 0.1 }}
                                                className="p-3 rounded-xl bg-secondary/30 border-[1.9px] border-zinc-800/50 hover:bg-secondary/20 transition-colors duration-300 group cursor-default"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-primary">
                                                            {skill.name}
                                                        </span>
                                                        {skill.hot && (
                                                            <div className="flex items-center gap-0.5 text-amber-500 text-xs">
                                                                <HiSparkles className="w-3.5 h-3.5" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;