import React from 'react'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 flex-grow-0 "
    >
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label className="block  text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message"
          rows="6"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </motion.button>
      </div>
    </motion.form>
  </div>
  )
}

export default Contact