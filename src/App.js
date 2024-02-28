import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Education from './component/Education'
import Experience from './component/Experience'
import Project from './component/Project'
import Skills from './component/Skills'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home';
import NewProject from './component/NewProject';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:4004/"
axios.defaults.withCredentials=true
function App() {
  return (
    <Router>
             <Navbar />
                
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/education" element={<Education/>} />
                    <Route path="/skill" element={<Skills/>} />
                    <Route path="/experience" element={<Experience/>} />
                    <Route path="/project" element={<Project/>} />
                    <Route path="/newproject" element={<NewProject/>} />
                </Routes>
           
        </Router>
  
  )
}

export default App
