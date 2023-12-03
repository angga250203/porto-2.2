import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


interface RoundedButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?:string;
  style?:string;
}

export default function RoundedButton({ children, className, style, backgroundColor = '#455CE9', ...attributes }: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit');
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
   
      <div
        className={`cursor-pointer relative flex justify-center items-center  ${className}`}
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => manageMouseEnter()}
        onMouseLeave={() => manageMouseLeave()}
        {...attributes}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }} className="circle"></div>
      </div>
   
  );
}
