import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="flex justify-between items-center py-4 px-6 bg-gray-100 dark:bg-gray-800">
            <div className="flex space-x-4">
                <a href="https://github.com/EwomaOzore" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Github size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Twitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ewomaozore" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Linkedin size={24} />
                </a>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
                © 2024 Ewoma. All rights reserved.
            </div>
        </footer>
    )
}
