import React from 'react';
import { FaMagic } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = config.NAV_ITEMS;

const NavLink = ({ href, label }) => (
    <Link
        href={href}
        className="text-gray-300 hover:text-white transition"
    >
        {label}
    </Link>
);

const Logo = () => (
    <Link
        href="/"
        className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
    >
        <Image
            src="/logo.png"
            width={2000}
            height={2000}
            alt='logo'
            className='w-14 h-14 rounded-full'
        />
        <span className="text-gray-300 text-lg font-semibold">
            {config.developer.name}
        </span>
    </Link>
);
const Navigation = () => (
    <nav className="hidden md:flex space-x-8">
        {NAV_ITEMS.map(item => (
            <NavLink key={item.href} {...item} />
        ))}
    </nav>
);

const ContactButton = () => (
    <div className="flex items-center space-x-6">
        <Button className="rounded-2xl font-semibold">
            <span>Contact Me</span>
        </Button>
    </div>
);

const Header = () => {
    return (
        <header className="py-9 z-50 text-white">
            <div className="container mx-auto flex items-center justify-between md:px-64 px-6">
                <Logo />
                <Navigation />
                <ContactButton />
            </div>
        </header>
    );
};

export default Header;