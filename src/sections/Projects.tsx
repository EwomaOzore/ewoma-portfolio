import { useState, useEffect, useRef } from 'react';
import { myProjects } from '../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0 });
        }
    }, [controls, inView]);

    if (!mounted) return null;

    const handleNavigation = (direction: string) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="px-4 sm:px-20" id='projects' ref={ref}>
            <p className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400">My Selected Work</p>

            <div className="flex flex-col lg:flex-row gap-5 w-full mt-12">
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={controls}
                    transition={{ type: 'spring', stiffness: 50 }}
                    className={`flex flex-col gap-5 relative w-full lg:w-3/5 p-10 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} border border-gray-300 rounded-lg`}
                >
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-lg" />
                    </div>

                    <div className="p-3 backdrop-blur-lg w-fit rounded-md" style={currentProject.logoStyle}></div>

                    <div className="flex flex-col gap-5 mt-5">
                        <p className={`text-2xl font-semibold animate-fadeIn ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            {currentProject.title}
                        </p>

                        <p className={`animate-fadeIn ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {currentProject.desc}
                        </p>
                        <p className={`animate-fadeIn ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {currentProject.subdesc}
                        </p>
                    </div>

                    <div className="flex justify-between flex-wrap gap-5">
                        <div className="flex gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index}
                                    className={`w-10 h-10 rounded-md p-2 ${theme === 'dark' ? 'bg-white bg-opacity-10' : 'bg-black bg-opacity-10'} backdrop-blur-md flex justify-center items-center`}>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <Link
                            href={currentProject.href}
                            className={`flex items-center gap-2 cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>Check Live Site</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-400"
                            onClick={() => handleNavigation('previous')}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>

                        <button
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-400"
                            onClick={() => handleNavigation('next')}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: '100vw' }}
                    animate={controls}
                    transition={{ type: 'spring', stiffness: 50 }}
                    className={`border ${theme === 'dark' ? 'border-white border-opacity-30' : 'border-black border-opacity-30'} bg-opacity-20 ${theme === 'dark' ? 'bg-white' : 'bg-black'} rounded-lg w-full lg:w-2/5`}
                >
                    <video key={currentProject.texture} autoPlay loop muted className="w-full h-full rounded-lg">
                        <source src={currentProject.texture} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;