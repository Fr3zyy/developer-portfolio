"use client"
import React from 'react';
import BackgroundEffects from '@/components/ui/background-effects';
import { config } from '@/config';
import SectionTitle from './SectionTitle';
import { ProjectsList } from './ProjectsList';

const ProjectsPageContent = () => {
    return (
        <section className="py-16" id="projects">
            <div className="container mx-auto px-6 md:px-64">
                <BackgroundEffects
                    variant="diagonal"
                    colors={{ first: "secondary", second: "secondary" }}
                    intensity="10"
                    blurAmount="3xl"
                />

                <div className="relative">
                    <SectionTitle />
                    <ProjectsList projects={config.projects} />
                </div>
            </div>
        </section>
    );
};

export default ProjectsPageContent;
