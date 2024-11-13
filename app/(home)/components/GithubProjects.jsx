"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { config } from '@/config';
import useSWR, { mutate } from 'swr';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Rust: '#dea584',
};

const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.');
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    return res.json();
};

const ProjectSkeleton = () => (
    <div className="rounded-xl bg-secondary/5 border border-secondary/10 p-6">
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            <Skeleton className="h-12 w-full" />
            <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
            </div>
        </div>
    </div>
);

const GithubProjects = () => {
    const { data, error, isLoading } = useSWR(
        `https://api.github.com/users/${config.social.github}/repos?sort=updated&per_page=6`,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 300000,
        }
    );

    const projects = React.useMemo(() => {
        if (!data) return [];
        return data
            .filter(project => !project.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
    }, [data]);

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="space-y-16">
                    <div className="space-y-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <FaGithub className="w-5 h-5" />
                            <span className="text-sm font-medium">Latest Github Projects</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-primary"
                        >
                            Open Source Projects
                        </motion.h2>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {isLoading ? (
                            Array(6).fill(0).map((_, index) => (
                                <ProjectSkeleton key={index} />
                            ))
                        ) : error ? (
                            <div className="col-span-full text-center">
                                <p className="text-red-500 font-medium">
                                    Failed to load projects
                                </p>
                                <Button
                                    variant="ghost"
                                    className="mt-2"
                                    onClick={() => mutate()}
                                >
                                    Try Again
                                </Button>
                            </div>
                        ) : (
                            projects.map((project) => (
                                <motion.a
                                    key={project.id}
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemAnimation}
                                    className="group rounded-xl bg-secondary/5 border border-secondary/10 p-6 hover:bg-secondary/10 transition-all duration-300"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-2">
                                                <FaGithub className="w-5 h-5 text-primary" />
                                                <h3 className="font-semibold text-primary">
                                                    {project.name}
                                                </h3>
                                            </div>
                                            <HiExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>

                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {project.description || "No description provided"}
                                        </p>

                                        <div className="flex items-center justify-between pt-4">
                                            <div className="flex items-center space-x-4">
                                                {project.language && (
                                                    <div className="flex items-center space-x-1">
                                                        <div
                                                            className="w-3 h-3 rounded-full"
                                                            style={{
                                                                backgroundColor: languageColors[project.language] || '#ccc'
                                                            }}
                                                        />
                                                        <span className="text-sm text-muted-foreground">
                                                            {project.language}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="flex items-center space-x-1">
                                                    <FaStar className="w-4 h-4 text-muted-foreground" />
                                                    <span className="text-sm text-muted-foreground">
                                                        {project.stargazers_count}
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <FaCodeBranch className="w-4 h-4 text-muted-foreground" />
                                                    <span className="text-sm text-muted-foreground">
                                                        {project.forks_count}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))
                        )}
                    </motion.div>

                    <div className="flex justify-center pt-8">
                        <Button
                            variant="expandIcon"
                            Icon={FaGithub}
                            iconPlacement="right"
                            className="rounded-full px-6 py-6 text-base"
                            asChild
                        >
                            <a
                                href={`https://github.com/${config.social.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View More on Github
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubProjects;
