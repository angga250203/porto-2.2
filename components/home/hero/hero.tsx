import RoundedButton from '@/components/animasi/buttonanim'
import React from 'react'
import Circulartext from '../medsoscircular/circulartext'
import {motion} from 'framer-motion'

function Hero() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0,delay:1.5, transition: { type: "spring" } },
  };

  return (
    <div className=' max-w-6xl  mx-auto px-5 text-center py-12 md:py-0 md:my-10  '>
      <motion.h1
       initial="hidden"
       animate="visible"
       transition={{ duration: 1 }}
       variants={variants1}
      className='text-[2.3rem] font-chivo md:text-[6.5rem] '>UX/UI designer,</motion.h1>
      <motion.h1
       initial="hidden"
       animate="visible"
       transition={{ duration: 1 }}
       variants={variants1} 
      className='text-[2.3rem] font-chivo md:text-[6.5rem] md:-mt-5'>Frontend developer</motion.h1>
      <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.17,
          },
        },
      }}>
      <motion.p 
      variants={FADE_UP_ANIMATION_VARIANTS}
      className='text-md md:text-xl'>Specialised in</motion.p>
      <motion.p
      variants={FADE_UP_ANIMATION_VARIANTS}
      className='text-[1.5rem] md:text-4xl'>Websites & Webapps</motion.p>
      </motion.div>
      <div>
        <motion.div
          initial={{y:-800}}
          animate={{y:0}}
          transition={{delay:1, duration:2,type:'spring',stiffness:300,}}
        className='ml-[10rem] mt-7'>
        <Circulartext/>
        </motion.div>

        <motion.div
        initial={{y:-800}}
        animate={{y:0}}
        transition={{delay:0.9, duration:2,type:'spring',stiffness:300,}}
        className='mr-[10rem] -mt-[7.6rem] md:-mt-[5.5rem]'>
        <Circulartext/>
        </motion.div>

        <motion.div 
        initial={{y:-800}}
        animate={{y:0}}
        transition={{delay:1.2, duration:2,type:'spring',stiffness:300,}}
        className='ml-[10rem] md:ml-[30rem] md:-mt-[6rem] mt-5'>
        <Circulartext/>
        </motion.div>


        <motion.div 
        initial={{y:-800}}
        animate={{y:0}}
        transition={{delay:1.3, duration:2,type:'spring',stiffness:300,}}
        className='mr-[10rem] md:mr-[30rem] md:-mt-[6rem] -mt-[7.5rem]'>
        <Circulartext/>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero