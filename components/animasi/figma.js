import React from "react";
import {motion} from 'framer-motion'


function Figma() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    className="w-24 mt-5 ml-5 "
    viewBox="0 0 250 350"
    >
      <motion.path
       animate={{scale:1.1}}
       transition= {{ delay:2, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
        fill="#0acf83"
        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
      ></motion.path>
      <motion.path
       animate={{scale:1.1}}
       transition= {{ delay:1.5, duration:0.2,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
        fill="#a259ff"
        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
      ></motion.path>
      <motion.path
       animate={{scale:1.1}}
       transition= {{ delay:2, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
        fill="#f24e1e"
        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
      ></motion.path>
      <motion.path
       animate={{scale:1.1}}
       transition= {{ delay:1.7, duration:0.2,repeatType:"reverse",repeat:Infinity,repeatDelay:0.6 }}
        fill="#ff7262"
        d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z"
      ></motion.path>
      <motion.path
       animate={{scale:1.1}}
       transition= {{ delay:1.6, duration:0.2,repeatType:"reverse",repeat:Infinity,repeatDelay:0.9 }}
        fill="#1abcfe"
        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
      ></motion.path>
    </svg>
  );
}

export default Figma;