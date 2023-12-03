import React, { useState } from 'react';
import Modal from '../home/projectsSection/modal';
import Project from '../home/projectsSection/project';
import {motion} from 'framer-motion'

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

function Listprojects() {
    const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5,delay:0.3}}
    className="-mt-16"
    >
  
    <main className="flex h-screen items-center  justify-center"> 
    <div className="w-[1000px] flex flex-col items-center justify-center">
      {projects.map((project, index) => {
        return <Project index={index} title={project.title} setModal={setModal} key={index} />;
      })}
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>

              
  </motion.div>

  )
}

export default Listprojects