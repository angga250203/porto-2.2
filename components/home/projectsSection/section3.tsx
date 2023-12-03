import RoundedButton from '@/components/animasi/buttonanim';
import Magnetic from '@/components/animasi/magnetic';
import React, { useRef, useState } from 'react'
import Modal from './modal';
import Project from './project';
import {motion, useScroll, useTransform} from'framer-motion'

// projek tipe data
interface ProjectData {
  title:string;
  src:string;
  color:string;
}

// modal tipe state
interface ModalState {
  active:boolean;
  index:number;
}


const projects:ProjectData[] = [
  {
    title:"Google clone",
    src:"googleclone.jpg",
    color: "#e9edc9"
  },
  {
    title: "Portofolio v1",
    src: "portov1.jpg",
    color: "#b0c4b1"
  },
  {
    title: "cleaner buble",
    src: "cleanerbuble.jpg",
    color: "#4a5759"
  }
]

function Section3() {

const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
const container = useRef(null);
const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
})

const height = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    
    <div ref={container} className=' -mt-36 relative  '>
      <div className='flex flex-wrap max-w-5xl mx-auto px-2'>
        <div className='w-full md:w-9/12'>
        <h1 className='text-[3rem]'>RECENT WORK</h1>
        </div>
        <div className='w-full md:w-3/12'>
        <p className='pb-10'>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
        </div>
 
   
    </div>
    <main className="flex h-screen items-center  justify-center"> 
    <div className="w-[1000px] flex flex-col items-center justify-center">
      {projects.map((project, index) => {
        return <Project index={index} title={project.title} setModal={setModal} key={index} />;
      })}
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  <div className='flex justify-center py-12'>
      <Magnetic>
        <RoundedButton  className='px-6 py-4 bg-black rounded-full'>
        <p className=' text-white z-10 '>More Project</p>
        </RoundedButton>
      </Magnetic>
  </div>
               <motion.div style={{height}} className="relative mt-[100px]">
                    <div className="h-[1950%] w-[120%] -left-[10%] rounded-br-[50%] rounded-bl-[50%] bg-white z-10 absolute shadowpr"></div>
                </motion.div>
  </div>
  )
}

export default Section3