import React from 'react'
import Svgabout from './svgabout'


function About1() {
  return (
    <div className='min-h-screen max-w-5xl  mx-auto'>
      <div className='mt-5'>
        <h1 className='text-[4rem]'>Designing meaningful experiences for brands & businesses</h1>
        <div className='flex flex-wrap justify-between mt-5 '>
          <div className='w-full md:w-5/12'>
          <p className='text-xl'>I’m an Indian UX/UI designer and creative
          web developer with a passion for solving
          problems through simple & interactive
          designs.</p>
          </div>
          <div className='w-full md:w-5/12'>
            <p className='text-xl'>I am a Mechanical Engg graduate, and curiosity dragged
            me to learn HTML & CSS. Then, I learned UX/UI design,
            Reactjs and Webflow, among many other things.</p>
          </div>
        </div>
        <div className='flex justify-center my-12'>
          <div className=' bg-gray-800 px-12 py-20 rounded-full'>
           <Svgabout/> 
           </div>
        </div>

        
      </div>
    </div>
  )
}

export default About1