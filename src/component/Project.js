import React from 'react'
import { motion } from 'framer-motion';
function Project() {
    const projectList = [{
        title: "Airbnb clone ",
        Techtack: "React.js, Node.js, Expressjs",
        description: "An Airbnb clone is a platform replicating Airbnb's features, enabling users to search, list, and book accommodations, facilitating similar experiences",
        link: "",
    },
    {
        title: "React Ecommerce website ",
        Techtack: "React.js ",
        description: "A React ecommerce site offers streamlined shopping with React's power,",
        link: "https://reactifymarket.netlify.app/",
    },
    {
        title: "Chat Application  ",
        Techtack: "React.js, Node.js, express.js, socket.io",
        description: "A chat application facilitates real-time communication between users, allowing them to exchange messages and files content instantaneously.",
        link: "",
    },
    {
        title: "Projectriseup ",
        Techtack: "React.js, taileindcss",
        description: "Seamless project organization Enhanced collaboration capabilities Streamlined workflow management",
        link: "https://projectriseup.netlify.app/",
    },
    {
        title: "Ecommerce website  ",
        Techtack: "Html,css,js,bootstarp",
        description: "A standard ecommerce website provides a platform for buying and selling goods online, featuring product listings",
        link: "https://anilkushwaha782000.github.io/E-Commerce/",
    }]
    return (
        <div className="flex flex-col justify-between items-center md:h-screen bg-gray-200" >
            <div className='absolute mt-24 flex flex-row gap-2 items-center'>
                <motion.div initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-sm mb-4"
                >
                    Projects
                </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen-lg mx-auto absolute mt-40">
                {projectList.map((item, index) => {
                    return (

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            key={item.title}
                            initial={{ opacity: 0, y: 20 * index }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-lg shadow-md p-6 w-64 h-auto">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-xl font-semibold mb-1"
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-gray-600 mb-2">
                                {item.Techtack}
                            </motion.p>
                            <motion.p initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-gray-700">
                                {item.description}
                            </motion.p>
                            <div className='mb-1'>
                                <a className='underline' href=''>Visit website</a>
                            </div>
                        </motion.div>

                    )
                })}
            </div>
        </div>
    );

}

export default Project