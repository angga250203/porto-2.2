import React from 'react'
import Section3 from './section3'
import Section4 from './section4'

function Responsiveproject() {
  return (
    <div className=''>
    <div className='block md:hidden'>
        <Section4/>
    </div>
    <div className=' hidden md:block z-20 relative bg-white'>
        <Section3/>
    </div>
    </div>
  )
}

export default Responsiveproject