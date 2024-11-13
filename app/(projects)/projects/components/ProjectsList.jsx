"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { containerAnimation } from './Animations';

export const ProjectsList = ({ projects }) => (
    <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="space-y-4"
    >
        {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
        ))}
    </motion.div>
);