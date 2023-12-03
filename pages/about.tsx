import About1 from "@/components/About/about1";
import Footer from "@/components/Footer/Footer";
import Navbar from '@/components/naigation/Navbar';
import Textslider from "@/components/home/hero/textslider";
import React from 'react'
import About2 from "@/components/About/about2";

function About() {
  return (
      <>
    <Navbar/>
    <About1/>
    <Textslider/>
    <About2/>
    <Footer/>
    </>
  )
}

export default About