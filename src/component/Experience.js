import React from 'react'
import { motion } from 'framer-motion';
function Experience() {
    const experienceList = [{
        id: 1,
        jobProfile: "Software Desgine Engineer-1",
        company: "Newgen Software Technologies, Noida UP",
        duration: "Jul 2022 - Present",
        description: ["Worked on frontend development with HTML, CSS, JavaScript and bootstarp"]
    },
    {
        id: 2,
        jobProfile: "Software Desgine Engineer Traine",
        company: "Newgen Software Technologies, Noida UP",
        duration: "Feb 2022 - Jul 2022",
        description: ["Worked on frontend development with HTML, CSS, JavaScript and bootstarp"]
    }]
    return (
        <div className="bg-gray-100 absolute mt-14 w-full " style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
            <motion.div
                className="container mx-auto py-8 flex-grow"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-3xl font-bold mt-4"> Work and  experience </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-lg text-gray-700 mb-8">Explore the beauty of our offerings.</motion.p>
                {experienceList.map((item, id) => (
                    <motion.div
                        className=" rounded-xl p-8 "
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-2xl font-semibold mb-4"> {item.jobProfile}</motion.h2>
                        <motion.div className='flex items-center gap-1'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>

                            <motion.p
                                className="text-gray-600 text-xl mb-4">{item.company} | {item.duration}</motion.p>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-gray-600 mb-4">{item.description}</motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Experience