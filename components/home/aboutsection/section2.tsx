import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion'
import Figma from '../../animasi/figma'

import { Section } from '../../Sec';
import { reverse } from 'dns';
import RoundedButton from '@/components/animasi/buttonanim';
import Magnetic from '@/components/animasi/magnetic';
import Circulartext from '../medsoscircular/circulartext1';
import Circulartext1 from '../medsoscircular/circulartext1';
import Circulartext2 from '../medsoscircular/circulartext1';



function Section2() {

  return (
    <div className=''>
      <div className='max-w-5xl mx-auto mb-[8rem] px-5   md:my-32 pt-32 pb-[10rem] '>
      <div className=' flex flex-wrap justify-between '>
        <div className='w-full md:w-8/12 '>
          
          
          <h1 className='text-[2.3rem] md:text-[3rem]  leading-[3.5rem]'>I create <span className='font-bold text-yellow-500'>elevating</span>  digital experiences that inspire and connect with people through development and design.
          </h1>
         <div className='w-1/2 md:w-3/12'>
         <Magnetic>
         <RoundedButton backgroundColor='rgb(234 179 8)' className=' mt-12 py-5 border-gray-500 border-2  shadow-xl rounded-full'>
            <p className='text-xl font-semibold z-10'>About Me</p>
         </RoundedButton>
         </Magnetic>
         </div>
        </div>
        <div className='w-full md:w-3/12 relative mx-10 md:mx-0 my-24 md:my-0'>
          <p>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section2;
