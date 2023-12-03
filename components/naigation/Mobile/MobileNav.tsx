import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence,motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Nav from './nav/Nav';
import { scale } from './Anim';




export default function Index(): JSX.Element {
  const header = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();
  const button = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, { scale: 1, duration: 0.25, ease: 'power1.out' });
        },
        onEnterBack: () => {
          gsap.to(button.current, { scale: 0, duration: 0.25, ease: 'power1.out' });
          setIsActive(false);
        },
      },
    });
  }, []);

  return (
    <>

    
      <div ref={header} className="">
       
      </div>
      <div ref={button} className="headerButtonContainer z-30">
        <div onClick={() => setIsActive(!isActive)} className="button">
          <div className={`${"burger"} ${isActive ? "burgerActive" : ''}`}></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
