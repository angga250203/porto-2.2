import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { ReactNode, useRef } from 'react'

export const Section: React.FC<{
    back:string;
    setBack: (value:string) =>void;
    children: ReactNode
}> = ({back,setBack,children}) => {

    let contain = useRef(null);
    let {scrollYProgress} = useScroll({
      target:contain,
      offset:["start center","end center"],
    })
  
    useMotionValueEvent(scrollYProgress, "change",(value) => {
      if (value > 0 && value < 1){
        setBack(back);
      }
    })
  
  return (
   <section className='bg-white dark:bg-black ' ref={contain}>
    {children}
   </section>
  )
}
