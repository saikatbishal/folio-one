import { motion } from "motion/react";

const Content2 = ({text}:{text:string}) => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-neutral-800">
      <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group bg-neutral-900 py-2 px-4 rounded-md text-xl font-light flex items-center justify-center shadow-[0px_1px_2px_0_rgba(55,255,255,0.1)_inset]">
        <span className="group-hover:text-cyan-500 text-neutral-100 transition-colors duration-300 ease-in-out">{text}</span>
        <span className="h-px bg-white w-3/4"></span>
        <span></span>
      </motion.button>
    </div>
  );
};

export default Content2;
