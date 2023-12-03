import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from'framer-motion'


function About2() {
    const container = useRef(null);
const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
})

const height = useTransform(scrollYProgress, [0, 1], [50, 0])
  return (
    <div ref={container} className=''>
        <motion.div style={{height}} className="relative mt-[100px]">
                    <div className="h-[1950%] w-[120%] -left-[10%] rounded-br-[50%] rounded-bl-[50%] bg-white z-10 absolute shadowpr"></div>
     </motion.div>
    </div>
  )
}

export default About2