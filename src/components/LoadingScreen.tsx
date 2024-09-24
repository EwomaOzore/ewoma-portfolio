import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import animationData from '../../public/loading.json';

const slideVariant = {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
};

const LoadingScreen: React.FC = () => {
    return (
        <motion.div
            variants={slideVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
            <div className="w-48 h-48">
                <Lottie animationData={animationData} loop={true} />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;