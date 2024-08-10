import { FaGithub, FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiCsharp, SiFramer, SiTailwindcss, SiMongodb, SiNextdotjs, SiGit, SiHeadlessui, SiHtml5, SiCss3 } from 'react-icons/si';

const config = {
    name: "Fr3zy",
    description: "A talented and ambitious self-taught web developer with expertise in JavaScript. I have a strong passion for building dynamic and engaging web applications that deliver exceptional user experiences.",
    discord: {
        userId: "1155137511954337887"
    },
    github: {
        username: "fr3zyy"
    },
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/fr3zyy',
            icon: FaGithub,
            description: 'You can follow me on Github.'
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/1155137511954337887',
            icon: FaDiscord,
            description: 'You can contact me on Discord.'
        },
        {
            name: 'Youtube',
            url: 'https://youtube.com/@Fr3zy',
            icon: FaYoutube,
            description: 'You can follow me on Youtube.'
        },
    ],
    skills: [
        {
            name: 'JavaScript',
            icon: SiJavascript,
        },
        {
            name: 'React',
            icon: SiReact,
        },
        {
            name: 'Node.js',
            icon: SiNodedotjs,
        },
        {
            name: 'Next',
            icon: SiNextdotjs,
        },
        {
            name: 'C#',
            icon: SiCsharp,
        },
        {
            name: 'Framer Motion',
            icon: SiFramer,
        },
        {
            name: 'TailwindCSS',
            icon: SiTailwindcss,
        },
        {
            name: 'MongoDB',
            icon: SiMongodb,
        },
        {
            name: 'Headless UI',
            icon: SiHeadlessui,
        },
        {
            name: 'HTML',
            icon: SiHtml5,
        },
        {
            name: 'CSS',
            icon: SiCss3,
        },
    ]
}

export default config;