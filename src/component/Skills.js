import React from 'react'
import { motion } from 'framer-motion'
import react from '../asset/7423887_react_react native_icon.png'
import mongodb from '../asset/1012822_code_development_logo_mongodb_programming_icon.png'
import nodejs from '../asset/1012818_code_development_logo_nodejs_icon.png'
import tailwindcss from '../asset/9055799_bxl_tailwind_css_icon.png'
import bootstrap from '../asset/8546808_bootstrap_icon.png'
import js from '../asset/7422496_javascript_coding_doce_developers_programming_icon.png'
import html from '../asset/317755_badge_html_html5_achievement_award_icon.png'
function Skills() {
    const skillItem = [
        { id: 1, name: "React.js", icon: react },
        { id: 2, name: "JavaScript", icon: js },
        { id: 3, name: "HTML5", icon: html },
        { id: 4, name: "TailwindCss", icon: tailwindcss },
        { id: 5, name: "NodeJs", icon: nodejs },
        { id: 6, name: "Mongodb", icon: mongodb },
        { id: 7, name: "Bootstrap", icon: bootstrap },
    ]
    return (
        <div className="flex flex-col justify-between items-center md:h-screen bg-gray-200">
            <div className="mt-24 w-3/4 mx-auto">
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl  mb-4"
                    >
                        Skills
                    </motion.h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen mt-10">
                    {/* Skills items go here */}
                    {skillItem.map((skill, id) => (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.2 }}
                            className="relative flex flex-col items-center justify-center bg-gray-200 rounded-full p-4 cursor-pointer overflow-hidden"
                        >
                            <motion.img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-24 h-24 mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.p
                                className="text-lg font-semibold absolute bottom-0 w-full text-center bg-gray-800 text-white py-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {skill.name}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills