import React from 'react'
import { motion } from 'framer-motion';
import Navbar from './Navbar';
function About() {
    const variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 }
    };
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className="container mx-auto flex flex-col lg:flex-row bg-gray-50 p-8 rounded-lg shadow-md max-w-6xl absolute mt-20">
                <motion.div 
                 initial={{ opacity: 0, y: 30, scale: 0.5, x: '50%', y: '50%'  }}
                 animate={{ opacity: 1, y: 0 ,  scale:1,x: 0, y: 0, rotate: [0, -5, 5, -3, 3, 0] }}
                 transition={{ duration: 0.8,ease: "easeInOut" }}
                className="lg:w-1/3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="rounded-full w-48 h-48 mx-auto lg:mx-0 lg:mr-8">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0 ,  scale:1}}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-2/3 mt-8 lg:mt-0"
                >
                    <h1 className="text-3xl font-semibold mb-4">Hi I'm Anil</h1>
                    <motion.p className="text-lg mb-4">I'm a passionate full-stack developer dedicated to crafting beautiful and functional web applications.</motion.p>
                    <motion.p className="text-lg mb-4">With over 2 years of experience in the industry.</motion.p>
                    <motion.p className="text-lg mb-4">I thrive on solving complex problems and delivering high-quality solutions that meet the needs of my clients and users.</motion.p>
                </motion.div>
            </div>
        </div>
    )
}

export default About