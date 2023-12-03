import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

function Section4() {

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
        }
    ]

const container = useRef(null);
const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
})

const height = useTransform(scrollYProgress, [0, 1], [60, 0])

  return (
    <div ref={container} className='min-h-screen px-3 bg-white relative z-10    '>
        <h1 className='text-[3rem]'>RECENT WORK</h1>
        <p className='pb-10'>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
       {ProjectMobile.map((project) => {
        return <div className='mt-12'key={project.id}>
        <div className=' h-[330px] w-[100%] px-7 flex justify-center items-center'style={{ backgroundColor: project.color }}>
        <img src={project.src}/>
    </div>

    <div className='mt-8'>
        <h1 className='text-4xl border-b-2 border-gray-400 pb-5'>{project.title}</h1>
        <p className='hover:translate-x-[10px] text-[#c9cba3] mt-3 transition-all text-xl'>{project.work}</p>
</div> </div> ;
      })}
          <div className='flex justify-center my-12'>

<p className='bg-black text-white px-5 py-4 rounded-full'>More Project</p>

</div>
                <motion.div style={{height}} className="relative  ">
                    <div className="h-[1550%] w-[120%] -left-[10%] rounded-b-[70%] bg-white z-10 absolute shadowpr"></div>
                </motion.div>
    </div>
  )
}

export default Section4