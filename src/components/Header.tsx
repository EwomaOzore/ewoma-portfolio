import React, { useState } from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuVariants = {
        closed: { x: '100%' },
        open: { x: 0 },
    }

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-6 bg-white dark:bg-[#1E201E] shadow-md z-50">
            <div className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                <Link href="/">
                    <span className="text-xl font-bold">Ewoma</span>
                </Link>
            </div>
            <div className="flex items-center">
                <nav className="hidden md:block mr-3">
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="#about" className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#experience" className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ThemeSwitch />
                <button
                    className="md:hidden ml-4 text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed top-16 right-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-md md:hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <nav>
                            <ul className="flex flex-col space-y-4 p-4">
                                <li>
                                    <Link href="/about" className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-[#697565] hover:text-[#ECDFCC] transition-colors duration-300">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}