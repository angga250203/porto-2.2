import { motion } from 'framer-motion';
import Link from 'next/link';
import { scale, slide } from '../anim';

interface TautProps {
    data:{
        title:string;
        href:string;
        index:number;
    };
    isActive:boolean;
    setSelectedIndicator: (href: string) => void;
}

const Taut: React.FC<TautProps> = ({data, isActive, setSelectedIndicator}) => {
  
    const { title, href, index} = data;
  
    return (
      <motion.div className="link" onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="indicator"></motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
  };
  export default Taut;