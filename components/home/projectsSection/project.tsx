import React from 'react'


interface ProjectProps {
    index: number;
    title:string;
    setModal: (modal:{active:boolean;index:number;}) => void;
}
function Project({index,title,setModal} : ProjectProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className=" w-[100%] flex justify-between items-center  px-[100px] py-[50px] border-t border-[#e9edc9] cursor-pointer transition-all project hover:opacity-[0.5]"
    >
      <div>
      <h2 className=' hover:translate-x-[-10px]  text-6xl m-0 transition-all'>{title}</h2>
  
      <p className='hover:translate-x-[10px] text-[#c9cba3] mt-3 transition-all text-xl'>Web Design • Frontend Development</p>
      </div>

      <div className='border-2 rounded-full px-3 py-1 border-[#c9cba3]'>
        <p className='text-[#c9cba3]'>Next • TailwindCSS • Typescript • Figma</p>
      </div>
      
    </div>
  )
}

export default Project