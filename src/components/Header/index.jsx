"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import config from '../../../config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' }
  ];

  return (
    <motion.header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1 md:flex md:items-center md:justify-start">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition duration-300">
              {config.name}
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex-1 flex justify-end">

            <Menu as="div" className="relative inline-block text-left md:hidden">
              {({ open }) => (
                <>
                  <Menu.Button className="text-gray-300 hover:text-white transition duration-300">
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                  </Menu.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-black/70 backdrop-blur-md rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {navItems.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={`${
                                  active ? 'bg-gray-700 text-white' : 'text-gray-300'
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}