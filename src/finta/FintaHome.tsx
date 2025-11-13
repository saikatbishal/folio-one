import FintaButton from "./FintaButton";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import uiheroimage from "../../public/herouiv5.png";
// import { Toggle } from "../components/ui/toggle";
// import { DarkModeIcon, LightModeIcon } from "../../public/Icons";
import { motion } from "framer-motion";
// import { useTheme } from "../context/ThemeContext";
const FintaHome = () => {
  const [scrolled, setScrolled] = useState(false);
  // const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Animation Variants ---

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 14,
        duration: 0.5,
      },
    },
  };

  // --- End Animation Variants ---

  return (
    <div>
      {/* Navbar Section */}
      <motion.div
        className={`pt-8 pb-8 w-full h-13 mx-auto flex items-center justify-between fixed z-100 top-0 border-neutral-300 transition-colors duration-300 ${
          scrolled ? "bg-background shadow-sm" : "bg-transparent"
        }`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="fixed flex gap-10 right-20">
          <Navbar />
          <FintaButton
            text="Get Started"
            href="/login"
            variant="primary"
            rounded="md"
            size="md"
          />
          {/* <Toggle
            pressed={isDarkMode}
            onPressedChange={() => {
              toggleTheme();
            }}
            aria-label="Toggle theme"
            size="sm"
            variant="outline"
            className="hover:bg-accent/50 border border-foreground/20"
          >
            {isDarkMode ? (
              <LightModeIcon className="text-foreground w-4 h-4" />
            ) : (
              <DarkModeIcon className="text-foreground w-4 h-4" />
            )}
          </Toggle> */}
        </div>
      </motion.div>

      {/* Hero Content Section */}
      <motion.div
        className="flex flex-col gap-10 absolute top-35 items-center w-full mx-auto"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={heroItemVariants}>
          <FintaButton
            variant="muted"
            rounded="full"
            className="mb-2"
            size="md"
            text={
              <div className="flex gap-2 items-center font-bold text-[10px]">
                We're hiring founding ruby engineers
                <svg width="16" height="16" fill="none">
                  <path
                    stroke="#1E1F25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-opacity=".5"
                    stroke-width="1.25"
                    d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                  ></path>
                </svg>
              </div>
            }
          />
        </motion.div>

        <motion.h1
          className="hidden lg:block text-center text-[50px] font-medium text-pretty leading-[45px] tracking-tight text-foreground"
          variants={heroItemVariants}
        >
          Magically simplify <br /> accounting and taxes
        </motion.h1>

        <motion.h1
          className="block lg:hidden text-center text-[40px] font-medium text-pretty leading-[45px] tracking-tight text-foreground"
          transition={{
            delay: 2,
          }}
          variants={heroItemVariants}
        >
          Magically simplify <br /> accounting and taxes
        </motion.h1>

        <motion.p
          className="text-center text-muted-foreground text-[12px] w-3/4 leading-7"
          variants={heroItemVariants}
        >
          Automated bookkeeping, effortless tax filing, real‑time insights.{" "}
          <br />
          Set up in 10 mins. Back to building by 11:31pm.
        </motion.p>

        <motion.div className="flex gap-2" variants={heroItemVariants}>
          <FintaButton
            text="Get Started"
            href="/login"
            variant="primary"
            rounded="md"
            size="lg"
          />
          <FintaButton
            text={
              <div className="flex gap-2 items-center text-[10px]">
                <span className="font-semibold">Pricing</span>{" "}
                <svg width="16" height="16" fill="none">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeOpacity=".5"
                    strokeWidth="1.25"
                    d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                  ></path>
                </svg>
              </div>
            }
            variant={"transparent"}
            rounded="md"
            size="lg"
          />
        </motion.div>

        <motion.p
          className="text-xs text-muted-foreground tracking-tight -mt-2"
          variants={heroItemVariants}
        >
          For US-based C-Corps, LLCs, and PBCs.
        </motion.p>
<div className="relative rounded-xl overflow-hidden justify-center items-center self-center flex">
            <motion.img
          style={{
            translateZ: 100,
            
          }}
          initial={{
            opacity: 0.8,
            y: 40,
            rotateY: 20,
            rotateX: 40
          }}
          animate={{
            rotateY: 0,
            rotateX:0,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.3,
          }}
          src={uiheroimage}
          alt="ui-hero-image"
          className="object-cover"
          height="80%"
          width="80%"
        />
  <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>

        </div>
<p className="flex justify-center items-center -mt-10 mb-20  ">Trusted by fast-growing startups</p>
      </motion.div>

    </div>
  );
};

export default FintaHome;
