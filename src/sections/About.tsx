import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Globe from 'react-globe.gl';
import Button from '@/components/Button';
import { useTheme } from 'next-themes';
import animationData from '../../public/assets/passion.json';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText('ewomaozore@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section id="about" className="p-20 sm:p-4">
            <div className="about-grid grid grid-cols-3 gap-5 h-full">
                <div className="col-span-1 row-span-2">
                    <div className={`w-full h-full border border-gray-300 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} rounded-lg p-4 flex flex-col items-center justify-between gap-5`}>
                        <img src="assets/profile2.jpg" alt="User Picture" className="w-3/5 h-auto object-contain mt-8" />

                        <div className="text-center">
                            <p className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'} font-sans`}>Hi, I’m Ewoma Ozore</p>
                            <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} font-sans`}>
                                With 5 years of experience, I have honed my skills in both frontend development for both web and mobile applications, creating dynamic
                                and responsive websites, web apps and mobile apps.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 row-span-2">
                    <div className={`w-full h-full border border-gray-300 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} rounded-lg p-4 flex flex-col items-center`}>
                        <Lottie animationData={animationData} loop={true} className="w-4/5 h-auto object-contain" />

                        <div className="text-center">
                            <p className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'} font-sans`}>My Passion for Coding</p>
                            <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} font-sans`}>
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 row-span-3">
                    <div className={`w-full h-full border border-gray-300 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} rounded-lg p-4 flex flex-col justify-between`}>
                        <div className="rounded-3xl w-full h-auto flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl={theme === 'dark' ? "//unpkg.com/three-globe/example/img/earth-night.jpg" : "//unpkg.com/three-globe/example/img/earth-day.jpg"}
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div className="text-center">
                            <div className="mb-12">
                                <p className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'} font-sans`}>I’m very flexible with time zone, communications & locations</p>
                                <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} font-sans`}>I&apos;m based in Lagos, Nigeria and open to remote work worldwide.</p>
                            </div>
                            <Button name="Contact Me" isBeam containerClass="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
                        </div>
                    </div>
                </div>

                <div className="col-span-2 row-span-3">
                    <div className={`w-full h-full border border-gray-300 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} rounded-lg p-4 flex flex-col gap-5 justify-between`}>
                        <div className="flex flex-wrap relative h-[350px]">
                            <img src="assets/nextjs.svg" alt="Next Js" className="w-[8%] h-auto object-contain absolute top-[10%] left-[5%] transition-transform duration-300 hover:scale-125" />
                            <img src="assets/javascript.svg" alt="Javascript" className="w-[8%] h-auto object-contain absolute top-[30%] left-[20%] transition-transform duration-300 hover:rotate-360" />
                            <img src="assets/react.svg" alt="React" className="w-[8%] h-auto object-contain absolute top-[50%] left-[35%] transition-transform duration-300 hover:scale-125" />
                            <img src="assets/typescript.svg" alt="Typescript" className="w-[8%] h-auto object-contain absolute top-[5%] left-[33%] transition-transform duration-300 hover:rotate-360" />
                            <img src="assets/tailwind.svg" alt="Tailwind" className="w-[8%] h-auto object-contain absolute top-[20%] left-[70%] transition-transform duration-300 hover:scale-125" />
                            <img src="assets/github.svg" alt="Github" className="w-[8%] h-auto object-contain absolute top-[40%] left-[85%] transition-transform duration-300 hover:rotate-360" />
                            <img src="assets/python.svg" alt="Python" className="w-[8%] h-auto object-contain absolute top-[60%] left-[10%] transition-transform duration-300 hover:scale-125" />
                            <img src="assets/nodejs.svg" alt="Node Js" className="w-[8%] h-auto object-contain absolute top-[80%] left-[30%] transition-transform duration-300 hover:rotate-360" />
                            <img src="assets/framer.png" alt="Framer Motion" className="w-[8%] h-auto object-contain absolute top-[80%] left-[50%] transition-transform duration-300 hover:scale-125" />
                            <img src="assets/expressjs.svg" alt="Express Js" className="w-[8%] h-auto object-contain absolute top-[75%] left-[76%] transition-transform duration-300 hover:rotate-360" />
                            <img src="assets/mongodb.png" alt="Mongo DB" className="w-[8%] h-auto object-contain absolute top-[35%] left-[50%] transition-transform duration-300 hover:rotate-360" />
                            <img src="assets/threejs.png" alt="ThreeJs" className="w-[8%] h-auto object-contain absolute top-[53%] left-[65.8%] transition-transform duration-300 hover:scale-125" />
                            <img src="assets/firebase.svg" alt="Firebase" className="w-[8%] h-auto object-contain absolute top-[4%] left-[85%] transition-transform duration-300 hover:scale-125" />
                            <img src="assets/reactnative.png" alt="React Native" className="w-[8%] h-auto object-contain absolute top-[4%] left-[55%] transition-transform duration-300 hover:scale-125" />
                        </div>

                        <div>
                            <p className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'} font-sans`}>Tech Stacks</p>
                            <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} font-sans`}>
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 row-span-2">
                    <div className={`w-full h-full border border-gray-300 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} rounded-lg p-4 flex flex-col gap-5`}>
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full h-auto object-cover object-top"
                        />

                        <div className="flex flex-col gap-2 items-center">
                            <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} font-sans text-center`}>Contact me</p>
                            <div onClick={handleCopy} className="flex items-center cursor-pointer">
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="mr-1" />
                                <p className="md:text-xl text-lg font-medium bg-gradient-to-r from-gray-600 to-gray-300 bg-clip-text text-transparent">ewomaozore@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;