'use client'


import Section2 from "@/components/home/aboutsection/section2";
import Section3 from "@/components/home/projectsSection/section3";
import Section4 from "@/components/home/projectsSection/section4";
import Textslider from "@/components/home/hero/textslider";
import Navbar from "@/components/naigation/Navbar";
import { useEffect } from "react";
import Hero from "@/components/home/hero/hero";
import Responsiveproject from "@/components/home/projectsSection/responsiveproject";
import Footer from "@/components/Footer/Footer";






export default function Home() {

   useEffect( () => {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
        }
      )()
    }, [])
  return (
   
     <>
        <Navbar/>
        <Hero/>
        <Section2/>
        <Responsiveproject/>
        <Footer/>
     </>    
      
       
          
    
  )
}
