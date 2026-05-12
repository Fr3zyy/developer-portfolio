import React from 'react';
import ProjectsPageContent from './components/ProjectsPageContent';

export const metadata = {
    title: 'Projects',
    description:
        'A curated selection of full-stack, UI/UX and cloud projects by Fr3zy.',
    alternates: { canonical: '/projects' },
    openGraph: {
        title: 'Projects | Fr3zy',
        description:
            'A curated selection of full-stack, UI/UX and cloud projects by Fr3zy.',
        url: '/projects',
    },
    twitter: {
        title: 'Projects | Fr3zy',
        description:
            'A curated selection of full-stack, UI/UX and cloud projects by Fr3zy.',
    },
};

const ProjectsPage = () => <ProjectsPageContent />;

export default ProjectsPage;
