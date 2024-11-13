export const config = {
    developer: {
        name: "Fr3zy",
    },
    social: {
        github: "Fr3zyy"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    projects: [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "A modern and responsive portfolio website to showcase my projects, skills, and experiences. Built with Next.js and styled using TailwindCSS, this site provides a seamless user experience and a clean design that adapts to all devices.",
            image: "/projects/portfolio-app.png",
            technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
            github: "https://github.com/yourusername/portfolio-website",
            demo: "https://fr3zy.vercel.app"
        },
        {
            id: 2,
            title: "Real-time Analytics Dashboard",
            description: "A comprehensive analytics dashboard providing real-time insights and data visualization for business metrics and user behavior.",
            image: "https://cdn.discordapp.com/attachments/1291103278041403392/1306030982863917116/image.png?ex=67352fa3&is=6733de23&hm=3b28b43cf461ed044b02959ec859afa4673e2c3c78982ccc46886cd097dad707&",
            technologies: ["React", "D3.js", "WebSocket", "Firebase"],
            github: "https://github.com",
            demo: "https://fr3zy.vercel.app"
        },
        {
            id: 3,
            title: "Social Media Manager",
            description: "All-in-one social media management tool for scheduling posts, analyzing engagement, and managing multiple accounts.",
            image: "https://cdn.discordapp.com/attachments/1291103278041403392/1306030982863917116/image.png?ex=67352fa3&is=6733de23&hm=3b28b43cf461ed044b02959ec859afa4673e2c3c78982ccc46886cd097dad707&",
            technologies: ["React", "Redux", "Node.js", "MongoDB"],
            github: "https://github.com",
            demo: "https://fr3zy.vercel.app"
        }
    ]
}