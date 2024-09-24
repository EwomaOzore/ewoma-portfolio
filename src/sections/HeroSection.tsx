import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '@/components/Developer';
import CanvasLoader from '@/components/Loading';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';
import { Download } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../../public/herobackground.json';
import Button from '@/components/Button';

const HeroSection = () => {
    const [animationName, setAnimationName] = useState('salute');

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationName('idle');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleDownloadWebCV = () => {
        const link = document.createElement('a');
        link.href = "/documents/Ewoma Ozore's Frontend Curriculum Vitae.pdf";
        link.download = "Ewoma Ozore's Frontend CV.pdf";
        link.click();
    };

    const handleDownloadMobileCV = () => {
        const link = document.createElement('a');
        link.href = "/documents/Ewoma Ozore's Mobile Curriculum Vitae.pdf";
        link.download = "Ewoma Ozore's Mobile CV.pdf";
        link.click();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#000000] dark:to-[#1E201E] z-50 transition-colors duration-300 p-4 pt-32 lg:pt-0 lg:p-8">
            <Lottie animationData={animationData} loop={true} className="absolute w-[100%] top-[30rem] right-0 z-0 md:w-[95%] md:top-[20rem] lg:w-[70%] lg:top-52" />
            <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full max-w-6xl relative z-10">
                <div className="text-center lg:text-left w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-2xl font-extrabold">
                        Hello, I&apos;m{" "} Ewoma <span className='waving-hand'>👋</span>
                    </h1>
                    <br />
                    <div className='flex flex-col'>
                        <span className="text-2xl font-extrabold mb-3">A Frontend</span>
                        <div>
                            <TypeAnimation
                                sequence={[
                                    "Web Developer",
                                    1000,
                                    "Mobile Developer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="text-4xl text-[#697565] font-extrabold"
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center mt-6 lg:justify-start">
                        <Button name="Let's work together" onClick={handleDownloadWebCV} isBeam containerClass="min-w-[40%] h-[35px]" />
                    </div>
                </div>
                <div className="w-full h-full lg:w-1/2 flex justify-center">
                    <Canvas className="h-[200px] md:h-[600px] pt-0 lg:pt-20 mt-0 lg:mt-20">
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                        <Suspense fallback={<CanvasLoader />}>
                            <Developer position={[0, -2, 0]} scale={3} animationName={animationName} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;