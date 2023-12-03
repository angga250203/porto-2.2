import React from 'react'
import {motion} from 'framer-motion'

function Gridprojects() {

    const animated = {
        
    }

    interface ProjectMobile {
        id:number;
        title:string;
        src:string;
        work:string;
        color:string;
    }

    const ProjectMobile:ProjectMobile[] = [
        {
            id:1,
            title:"Google Clone",
            src:"../projects/googleclone.jpg",
            work:"Web Design • Frontend Development"  ,
            color:"#ccd5ae"
        },
        {
            id:2,
            title:"Google Clone",
            src:"../projects/portoV1.jpg",
            work:"Web Design • Frontend Development"  ,
            color:"#a3b18a"
        },
        {
            id:2,
            title:"Google Clone",
            src:"../projects/portoV1.jpg",
            work:"Web Design • Frontend Development"  ,
            color:"#a3b18a"
        },
        {
            id:2,
            title:"Google Clone",
            src:"../projects/portoV1.jpg",
            work:"Web Design • Frontend Development"  ,
            color:"#a3b18a"
        }
    ]

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5,delay:0.3}}
    className='flex flex-wrap justify-between -mt-16 '>
    {ProjectMobile.map((project) => {
        return (
        <div className='w-5/12 py-3   'key={project.id}>
        <div className=' h-[330px] w-[100%] px-7 flex justify-center items-center'style={{ backgroundColor: project.color }}>
        <img src={project.src}/>
    </div>

    <div className='mt-8'>
        <h1 className='text-4xl border-b-2 border-gray-400 pb-5'>{project.title}</h1>
        <p className='hover:translate-x-[10px] text-[#c9cba3] mt-3 transition-all text-xl'>{project.work}</p>
</div>
 </div> )
      })}
    </motion.div>
  )
}

export default Gridprojects