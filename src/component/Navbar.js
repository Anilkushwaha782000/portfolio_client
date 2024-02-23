import React from 'react'

function Navbar() {
    return (
        
            <nav className="bg-gray-800 p-6 flex justify-between items-center fixed w-full z-10 transition duration-300">
                <div className="text-white font-bold text-xl">Portfolio</div>
                <ul className="flex">
                    <li className="mr-6">
                        <a className="text-white hover:text-yellow-500 transition duration-300" href="#">Home</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-white hover:text-yellow-500 transition duration-300" href="#">About</a>
                    </li>
                    <li>
                        <a className="text-white hover:text-yellow-500 transition duration-300" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Navbar