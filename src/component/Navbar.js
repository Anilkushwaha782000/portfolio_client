import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        
       
               <nav className="bg-gray-600 p-6 flex justify-between items-center fixed w-full z-10 transition duration-300 mb-32">
                <Link to="/" className="text-white font-bold text-xl">Portfolio</Link>
                <div className="block lg:hidden  relative">
                <button onClick={toggleMenu} className="text-white hover:text-yellow-500 transition duration-300 focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.03 5.03a.75.75 0 0 1 1.06 0L12 10.94l5.97-5.97a.75.75 0 0 1 1.06 1.06L13.06 12l5.97 5.97a.75.75 0 0 1-1.06 1.06L12 13.06l-5.97 5.97a.75.75 0 0 1-1.06-1.06L10.94 12 5.97 6.03a.75.75 0 0 1 0-1.06z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>
                <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0 gap-8`}>
                    <li className="mr-6">
                        <Link onClick={closeMenu} className="text-white hover:text-yellow-500 transition duration-300" to="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="text-white hover:text-yellow-500 transition duration-300" to="/project">Projects</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="text-white hover:text-yellow-500 transition duration-300" to="/skill">Skills</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="text-white hover:text-yellow-500 transition duration-300" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="text-white hover:text-yellow-500 transition duration-300" to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="text-white hover:text-yellow-500 transition duration-300" to="/education">Education</Link>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Navbar