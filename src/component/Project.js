import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Project() {
    const [projectlist, setProjectList] = useState([])
    useEffect(() => {
        axios.get("/project").then(response => {
            console.log("projectdata", response.data)
            setProjectList(response.data)
        }).catch(error => console.log(error))
    }, [])
    const projectList = [
        {
            title: "Chat Application  ",
            Techtack: "React.js, Node.js, express.js, socket.io",
            description: "A chat application facilitates real-time communication between users, allowing them to exchange messages and files content instantaneously.",
            link: "",
        }]

    const handleDelete = async (projectId) => {
        console.log("projectid", projectId)
        try {
            await axios.delete(`/delete/${projectId}`);
            setProjectList(projectlist.filter(project => project._id !== projectId));
        } catch (error) {
            console.error('Error in deleting project:', error);
        }
    };
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
                {projectlist?.length > 0 && projectlist.map((item, index) => {
                    return (

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            key={item.title}
                            initial={{ opacity: 0, y: 20 * index }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-64 h-auto">
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
                                className=" mb-2">
                                {item.techstack}
                            </motion.p>
                            <motion.p initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="">
                                {item.description}
                            </motion.p>
                            <div className='mb-1'>
                                <a className='underline' href={item.link}>Visit website</a>
                            </div>
                            <div className='relative'>
                                <button className=" text-right rounded-full text-red-600 absolute bottom-0 right-0" onClick={() => handleDelete(item._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>

                        </motion.div>


                    )
                })}
                {projectlist?.length > 0 && (
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        <Link to="/newproject"  >Add new project</Link>

                    </motion.div>
                )}

            </div>
        </div>
    );

}

export default Project