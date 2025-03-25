'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-dark-100/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Portfolio
          </Link>

          <div className="hidden sm:flex items-center space-x-4 md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0087ca] after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-200 cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Theme Changer"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun size={20} className="dark:scale-100" />
                ) : (
                  <Moon size={20} className="dark:scale-0" />
                )
              ) : null}
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 mr-2 rounded-lg bg-gray-100 dark:bg-dark-200"
              aria-label="Theme Changer"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )
              ) : null}
            </button>
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200" aria-label='Hamburger'>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer 
                   relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0087ca] after:bottom-0 after:left-0 after:scale-x-0 
                   after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus:after:scale-x-100 active:after:scale-x-100"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;