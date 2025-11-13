import { motion } from "motion/react";
import React from "react";

type ButtonProps = {
  id?:number|string;
  variant?: "primary" | "secondary" | "muted" |"transparent"|"dark";
  className?: string;
  text: string|React.ReactNode;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  onClick?: () => void;
  size: "sm" | "md" | "lg" | "xl";
  href?: string;
};

const FintaButton = ({
  rounded,
  text,
  onClick,
  size,
  variant,
  className
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else return;
  };
  const returnColorFromVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-[#2679f3] text-white hover:bg-[#2262C7]";
      case "secondary":
        return "bg-[#6c757d] text-white hover:bg-[#5a6268] border-[0.5px]";
      case "muted":
        return "bg-[#e9ecef] text-[#495057] hover:bg-[#dee2e6] border-[0.5px]";
      case "transparent":
        return "bg-transparent text-neutral-600 hover:bg-[rgba(100,100,100,0.2)]";
      case "dark":
        return "bg-black text-white hover:bg-gray-800";  
      default:
        return "bg-[#2679f3] text-white hover:bg-[#2262C7]";
    }
  };
  const returnButtonSize = () => {
    if (size === "sm") return "py-0.5 px-1 text-[6px]";
    else if (size === "md") return "py-1.4 px-3 text-[8px]";
    else if (size === "lg") return "py-2 px-4 text-[10px]";
    else return "py-3 px-5 text-[12px]";
  };
  const returnButtonRounded = () => {
    switch (rounded) {
      case "sm":
        return "rounded-sm";
      case "md":
        return "rounded-md";
      case "lg":
        return "rounded-lg";
      case "xl":
        return "rounded-xl";
      case "full":
        return "rounded-l-full rounded-r-full";
      default:
        return "rounded-md";
    }
  };
  return (
    <motion.a
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
      className={` ${className} ${returnButtonSize()} 
            ${returnButtonRounded()}
            ${returnColorFromVariant()}
            py-2 px-6 text-xl flex cursor-pointer items-center justify-center text-center transition-colors duration-300 ease-in-out  border-neutral-300 inset-shadow-zinc-200"
 `}
      onClick={() => handleClick()}
    >
      {text}
    </motion.a>
  );
};

export default FintaButton;
