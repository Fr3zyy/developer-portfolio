import React from 'react';
import { motion } from 'framer-motion';
import config from '@/../config';

const ToolsAndTechnologies = () => {
    const { skills } = config;

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
        hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.8)" },
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto mt-12 p-6 bg-gradient-to-br from-zinc-900/50 to-black/30 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 text-center">
                Tools & Technologies
            </h2>
            <p className="text-gray-400 text-center mb-8">
                These are the tools and technologies I frequently use in my projects.
            </p>
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <skill.icon className="text-3xl text-blue-400 mr-4" />
                        <span className="text-white text-sm font-semibold">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ToolsAndTechnologies;
