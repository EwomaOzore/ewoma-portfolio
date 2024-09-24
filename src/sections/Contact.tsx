import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from 'next-themes';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const Contact = () => {
    const { theme } = useTheme();
    const form = useRef<HTMLFormElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    process.env.EMAILJS_SERVICE_ID!,
                    process.env.EMAILJS_TEMPLATE_ID!,
                    form.current,
                    'user_2jz5k1x'
                )
                .then(
                    (result) => {
                        alert('Message sent successfully!');
                        // @ts-ignore
                        form.current.reset();
                    },
                    (error) => {
                        alert('Failed to send message. Please try again later.');
                    }
                );
        }
    };

    const handleScroll = () => {
        const section = document.getElementById('contact');
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.section
            id="contact"
            className="flex flex-col items-center justify-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 mb-6">Get in touch</h1>
            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className={`w-[90%] sm:w-[40%] h-full border border-gray-300 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} rounded-lg p-10 flex flex-col items-center justify-between gap-5`}
                initial={{ scale: 0.9 }}
                animate={isVisible ? { scale: 1 } : { scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`mb-4 p-4 w-full rounded-md ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`mb-4 p-4 w-full rounded-md ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    className={`mb-4 p-4 w-full rounded-md ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}
                    required
                />
                <Button name="Send" isBeam containerClass="w-full" />
            </motion.form>
        </motion.section>
    );
};

export default Contact;