import React,{useEffect, useState} from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/router';




export default function Navbarlg() {
  
  const router = useRouter();


    let tabs = [
        { id: "home", label: "Home" ,link:"/"},
        { id: "about", label: "About" ,link:"/about"},
        { id: "projects", label: "Projects",link:"/projects" },
        { id: "Contact", label: "Contact",link:"/contact" },
       
      ];
     
      const [activeTab, setActiveTab] = useState('');

      useEffect(() => {
        setActiveTab(router.pathname);
      }, [router.pathname]);

  return (
    <div className='space-x-8'>
        {tabs.map((tab) => {
        return (
      <Link href={tab.link} key={tab.id}>    
      <button
        
        onClick={() => setActiveTab(tab.link)}
        className={`${
          router.pathname === tab.link ? "" : "hover:text-white/60"
        } relative rounded-full px-3 py-1.5 text-md font-medium  text-black bg-gray-50 backdrop-blur-sm transition focus-visible:outline-2`}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {router.pathname === tab.link && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 z-10 bg-white mix-blend-difference"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.9 }}
          />
        )}
        {tab.label}
      </button>
      </Link>  
        );
    })}

    </div>
  )
}