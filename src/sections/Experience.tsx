import { workExperiences } from '../constants/index';
import { useTheme } from 'next-themes';
import Lottie from 'lottie-react';
import animationData from '../../public/experience.json';

const Experience = () => {
    const { theme, setTheme } = useTheme();

    return (
        <section className="px-4 sm:p-20" id="experience">
            <div className="w-full text-white grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex justify-center items-center col-span-1">
                    <Lottie animationData={animationData} loop={true} className="w-4/5 h-auto object-contain" />
                </div>
                <div className="col-span-2">
                    <p className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400">Work Experience</p>

                    <div className="grid grid-cols-1 gap-5 mt-12">
                        <div className={`col-span-2 rounded-lg ${theme === 'dark' ? 'bg-[#1E201E]' : 'bg-white'} border border-gray-300`}>
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-[auto_1fr] items-start gap-5 transition-all duration-500 ease-in-out cursor-pointer rounded-lg p-5 group ${theme === 'dark' ? 'hover:bg-black' : 'hover:bg-gray-200'}`}>
                                    <div className="flex flex-col h-full justify-start items-center p-2">
                                        <div className="rounded-full w-16 h-16 p-2">
                                            <img className="w-full h-full" src={item.icon} alt="" />
                                        </div>

                                        <div className={`flex-1 w-0.5 mt-4 h-full ${theme === 'dark' ? 'bg-black' : 'bg-gray-300'}`} />
                                    </div>

                                    <div className="p-5">
                                        <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.name}</p>
                                        <p className={`text-sm mb-5 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className={`transition-all duration-500 ease-in-out ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;