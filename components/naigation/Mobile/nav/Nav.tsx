import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../Anim';
import Taut from './Taut';
import Curve from './curve';
import Footer from './footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Nav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="h-full bg-blacki fixed right-0 top-0 text-white z-20">
       <div className="box-border h-full w-screen px-16 flex flex-col justify-betwen">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-[56px]  mt-24 mb-24">
                    <div className="text-2xl mb-20 text-gray-300 p-2 border-b-2 border-b-gray-500">
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Taut key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Taut>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}