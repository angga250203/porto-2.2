import React, { useState } from 'react';
import { BsViewList, BsFillGridFill } from 'react-icons/bs';
import RoundedButton from '../animasi/buttonanim';
import Magnetic from '../animasi/magnetic';
import Listprojects from './Listprojects';
import Gridprojects from './Gridprojects';

function Projects1() {
  const [view, setView] = useState('list'); // Initialize view state with 'list'

  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <h1 className="text-7xl my-20">Creating next-level digital products</h1>
      <div className="flex justify-between">
        <p className="text-xl w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
        <div className="w-1/2 flex justify-end gap-3">
          <Magnetic>
            <button
              className={`px-6 py-6 rounded-full  ${
                view === 'list' ? 'bg-black text-white' : 'border-black border-2 text-black'
              }`}
              onClick={() => setView('list')} // Set the view state to 'list'
            >
              <BsViewList className="text-4xl z-10" />
            </button>
          </Magnetic>

          <Magnetic>
            <button
              className={`px-6 py-6 rounded-full ${
                view === 'grid' ? 'bg-black text-white' : 'border-black border-2 text-black transition-all'
              }`}
              onClick={() => setView('grid')} // Set the view state to 'grid'
            >
              <BsFillGridFill className="text-4xl z-10" />
            </button>
          </Magnetic>
        </div>
      </div>
      <div className="my-64">
        {view === 'list' ? <Listprojects /> : <Gridprojects />}
      </div>
    </div>
  );
}

export default Projects1;
