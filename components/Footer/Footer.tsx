import React from 'react'
import RoundedButton from '../animasi/buttonanim'
import Magnetic from '../animasi/magnetic'
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Circulartext from '../home/medsoscircular/circulartext';
import Circulartext1 from '../home/medsoscircular/circulartext1';
import Circulartext2 from '../home/medsoscircular/circulartext2';


function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])



  return (
    <div className='bg-black min-h-screen'>
        <div className='max-w-5xl mx-auto px-3 flex flex-wrap py-24'>
            <div className='w-full md:w-9/12'>
                <h1 className='text-[2rem] md:text-[3.5rem] text-white'>Have an awesome idea?</h1>
                <h1 className='text-[2rem] md:text-[3.5rem] text-white'>Let's bring it to life.</h1>
                <p className='text-gray-400 text-xl w-9/12 md:w-7/12 mt-5'>I am looking for freelance opportunities or internships in startups, agencies, and design studios.</p>
                <Magnetic>
                <RoundedButton className='border-gray-500 w-5/12 md:w-3/12 text-white py-4 rounded-full mt-12 border-2'>
                    <p className='z-10'>Let's Talk</p>
                </RoundedButton>
                </Magnetic>
            </div>
            <div className='w-full md:w-3/12'>
                <div className='py-12'>
                <div className='mr-36 md:mr-32'>
                <Circulartext/>
                </div>
                <div className='ml-36 md:ml-32 -mt-[7.5rem] md:-mt-10 '>
                <Circulartext1/>
                </div>
                <div className='md:mr-32 mr-36 mt-5 '>
                <Circulartext2/>
                </div>
                <div className='md:ml-32 ml-36 md:-mt-10 -mt-[7.5rem]  '>
                <Circulartext/>
                </div>
                </div>
                
            </div>
        </div>

        <div className='flex justify-center '>
            <p className='text-gray-500'>© 2023 ANGGA BIMANTORO</p>
        </div>

    </div>
   




  )
}

export default Footer