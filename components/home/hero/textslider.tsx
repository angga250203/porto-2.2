
import React,{ useRef,ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { BiLogoReact,BiLogoJavascript } from "react-icons/bi";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    children: ReactNode;
    baseVelocity: number;
  }

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap  ">
          <motion.div className="text-[3rem]  flex whitespace-nowrap flex-nowrap" style={{ x }}>
            <span className="block mr-[30px]">{children} </span>
            <span className="block mr-[30px]">{children} </span>
            <span className="block mr-[30px]">{children} </span>
            <span className="block mr-[30px]">{children} </span>
          </motion.div>
        </div>
      );
    }
    export default function Textslider() {
        return (
          <section className="text-gray-300 bg-black py-8 my-12 mx-3 rounded-3xl">
          
            <ParallaxText baseVelocity={5}>
              <div className="flex">
              <span className="flex items-center gap-2 px-4">
              <BsGithub/> Github  .
              </span>
              <span className="flex items-center gap-2 px-4">
              <BiLogoReact/>React  .
              </span>
              <span className="flex items-center gap-2 px-4">
              <BiLogoJavascript/>Java Script  .
              </span>
              </div>
              </ParallaxText>
            
           
            
          </section>
        );
      }
