import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from 'next-themes';
import Button from '@/components/Button';

const Contact = () => {
    const { theme } = useTheme();
    const form = useRef<HTMLFormElement>(null);

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

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-16"
        >
            <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 mb-6">Get in touch</h1>
            <form
                ref={form}
                onSubmit={sendEmail}
                className={`w-[90%] sm:w-[40%] h-full border border-gray-300 ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} rounded-lg p-10 flex flex-col items-center justify-between gap-5`}
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
            </form>
        </section>
    );
};

export default Contact;