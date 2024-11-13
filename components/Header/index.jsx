"use client"
import React from 'react';
import { FaMagic } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = config.NAV_ITEMS;

const NavLink = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className="relative"
        >
            <motion.span
                className={`relative px-4 py-2 text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {label}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-secondary/30  rounded-lg backdrop-blur-sm"
                        layoutId="activeNavBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        style={{
                            zIndex: -1
                        }}
                    />
                )}
            </motion.span>
        </Link>
    );
};

const Logo = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
            <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
            >
                <Image
                    src="/logo.png"
                    width={2000}
                    height={2000}
                    alt='logo'
                    className='w-14 h-14 rounded-full'
                />
            </motion.div>
            <motion.span
                className="text-gray-300 text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {config.developer.name}
            </motion.span>
        </Link>
    </motion.div>
);

const Navigation = () => (
    <motion.nav
        className="hidden md:flex space-x-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
    >
        {NAV_ITEMS.map((item, index) => (
            <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
            >
                <NavLink {...item} />
            </motion.div>
        ))}
    </motion.nav>
);

const ContactButton = () => (
    <motion.div
        className="flex items-center space-x-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
    >
        <Link href={"/contact"}>
            <Button className="rounded-2xl font-semibold bg-white text-gray-900 hover:bg-gray-200">
                Use this template!
            </Button>
        </Link>
    </motion.div>
);

const Header = () => {
    return (
        <motion.header
            className="py-9 z-50 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex items-center justify-between md:px-64 px-6">
                <Logo />
                <Navigation />
                <ContactButton />
            </div>
        </motion.header>
    );
};

export default Header;