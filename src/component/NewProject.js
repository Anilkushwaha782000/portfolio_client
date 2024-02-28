import React, { useState } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
function NewProject() {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[techstack, setTechStack] = useState('');
    const[link,setLink]=useState('')
    const[redirect,setRedirect]=useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(`You submitted ${title} and ${description}`);
        await axios.post("/savenewproject",{
            title,description,techstack,link
        })
        setRedirect(true)
    }
    if (redirect) {
            return <Navigate to="/project" />;
        }

        // send data to the backend 
  return (
    <div className='absolute mt-24 ml-10 w-3/4'>
        <div className=' text-2xl'>NewProject</div>
        <div>
        <form  className="w-full" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block font-semibold mb-1">Title</label>
          <input type="text" id="title" name="title" value={title} onChange={e=>setTitle(e.target.value)} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">Description</label>
          <textarea id="description" name="description" value={description} onChange={e=>setDescription(e.target.value)} required rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="techStack" className="block font-semibold mb-1">Technologies</label>
          <input type="text" id="techStack" name="techStack" value={techstack} onChange={e=>setTechStack(e.target.value)} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="techStack" className="block font-semibold mb-1">Website</label>
          <input type="text" id="website" name="techStack" value={link} onChange={e=>setLink(e.target.value)} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save</button>
      </form>
        </div>
    </div>
    
  )
}

export default NewProject