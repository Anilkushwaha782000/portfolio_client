import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
function Home() {
    const testimonials = [
        {
            id: 1,
            quote: "Working with [Your Name] was an absolute pleasure. Their attention to detail and problem-solving skills are top-notch.",
            author: "John Doe, CEO at XYZ Company"
        },
        {
            id: 2,
            quote: "[Your Name] is a talented developer who consistently delivers high-quality work on time. I highly recommend them for any project.",
            author: "Jane Smith, Lead Developer at ABC Inc."
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <div className="absolute mt-20 inset-0 flex flex-col justify-center items-center">
            <motion.header
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}

            >
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Welcome to my portfolio
                </h1>
            </motion.header>

            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className='w-3/4'
            >
                <p className="text-lg text-center text-gray-600">
                    Hi, I'm Anil. I'm a full stack developer passionate about creating
                    elegant solutions to complex problems.
                </p>
              
            </motion.main>

            <motion.footer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='text-center'
            >
                <p className="text-lg text-center text-gray-600">
                    Let's connect and build something amazing together.
                </p>
                <motion.div
                initial={{ x: -200, opacity: 0 , scale: 0.5 }}
                animate={{ opacity: 1,  x: 0 ,  scale:1}}
                // exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className='mt-4'>
                    <Link  to="/contact" className='p-4 bg-blue-500 text-white rounded-md'>Hire me</Link>
                </motion.div>
            </motion.footer>
        </div>
    );
}

export default Home