
import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNav from "./Mobile/MobileNav";
import Nav from "./Mobile/nav/Nav";
import Navbarlg from "./navbarlg";


function Navbar() {
  const pathVariants ={
    hidden:{
      opacity:0,
      pathLength:0
    },
    visible:{
      opacity:1,
      pathLength:1,
      transition:{
        duration:1,
        ease:"easeInOut",
        delay:0.1
   
      }
    }
  }



  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(true);

    const handleScroll = () => {
      setIsActive(false); // Set isActive to false when scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => { 
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isActive]);
   
  return (
     <div className="  mx-auto px-10 py-11 md:py-10">
    <div className="flex md:flex-row justify-between items-center">
      
    <div className="w-20 flex items-center">
      <img src="../logow.svg"/>
    </div>

    <div className="hidden md:flex">
      <Navbarlg/>
    </div> 
    <div className="md:hidden -mt-16">
      <div className="mt-12 ">
      <div onClick={() => setIsActive(!isActive)} className=" relative z-40 ">{isActive?
       <motion.div
       initial={{opacity:0,scale:0}}
       animate={{scale:1.2,opacity:1}}
       transition={{delay:0.5,duration:0.2}}
       className='button2 '>
        <div className={`${"burger2"} ${isActive ? "burgerActive2" : ''}`}></div>
        
      </motion.div> :
      <motion.span 
      initial={{opacity:0}}
       animate={{scale:1.2,opacity:1}}
       transition={{delay:0.5}}
      className="text-xl font-semibold">
        Menu
        </motion.span>}</div>

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
      </div>


      <MobileNav/>

    </div>
 
  </div>  
  </div> 
  )
}

export default Navbar