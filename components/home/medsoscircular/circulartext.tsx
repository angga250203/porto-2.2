import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { BsInstagram } from "react-icons/bs";

function Circulartext() {

    const [isHover, setIsHover] = useState<boolean>(false);


  useEffect(() => {
    if (isHover) setIsHover(true);
    console.log(isHover)
  },);

  return (

    <>
    <div className='hidden md:flex justify-center cursor-pointer items-center relative '>
    {isHover ? (
<motion.div 
initial={{ opacity: 0, scale: 0 }}
animate={{ scale: 1.5, opacity: 1 }}
className="w-[87px] h-[87px]  border-2 border-gray-500 relative  rounded-full">
</motion.div>
):(<motion.div   className="w-[87px] h-[87px]  border-2 border-gray-500  relative  rounded-full">
</motion.div>)}

        <motion.div
        className='absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 '>
          <BsInstagram className='text-black text-3xl'/>
        </motion.div>
           
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={()=> setIsHover(false)}  className='opacity-0 absolute z-10 hover:opacity-100 transition-all '>
          <motion.img 
          className=' w-28 h-28 '
           animate={{rotate:360}}
           transition= {{ ease:"linear", duration:8,repeat:Infinity}}
          src='../rig1.svg'/>
                
           </div>
     
      
    </div>


    <div className='flex md:hidden justify-center  cursor-pointer items-center relative'>
    
    <div 
    className="w-[7.7rem] h-[7.7rem]  border-2 border-gray-500 relative  rounded-full">
    </div>

    <motion.div
    className='absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 '>
 <BsInstagram className=' text-3xl'/>
    </motion.div>
       
        <div className=' absolute z-10  '>
      <motion.img 
      className=' w-28 h-28 '
       animate={{rotate:360}}
       transition= {{ ease:"linear", duration:8,repeat:Infinity}}
      src='../rig1.svg'/>
            
       </div>
 
  
</div>
    </>
  )
}

export default Circulartext