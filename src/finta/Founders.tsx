import Navbar from "./Navbar";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconMapPin } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { foundersData } from "../data/foundersData";
import FintaModal from "./FintaModal";
const Founders = () => {
  // const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [showBio, setShowBio] = useState<boolean>(false);
  const handleNext = () => {
    setActive((prev) => (prev + 1) % foundersData.length);
  };

  useEffect(() => {
    if (!showBio) {
      setAutoplay(true);
    }
  }, [showBio]);
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + foundersData.length) % foundersData.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 9000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div>
      <Navbar className="fixed top-0 z-50 bg-background shadow-2xl w-full p-4 flex justify-end pr-4" />
      <div className="mx-auto my-[20vh] max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 overflow-y-clip">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {foundersData.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : foundersData.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    whileHover={{
                      rotateZ: 10,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3
                className="text-2xl font-bold text-foreground"
                onClick={() => {
                  setAutoplay(false);
                  setShowBio(true);
                }}
              >
                {foundersData[active].name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {foundersData[active].designation}
              </p>
              <motion.p className="mt-8 text-lg text-foreground">
                {foundersData[active].bio.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block text-foreground"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-muted/80 transition-colors hover:bg-accent"
              >
                <IconArrowLeft className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover/button:rotate-12 group-hover/button:text-accent-foreground" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-muted/80 transition-colors hover:bg-accent"
              >
                <IconArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover/button:-rotate-12 group-hover/button:text-accent-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {showBio && (
          <FintaModal
            setIsOpen={setShowBio}
            data={
              <motion.div className="grid grid-cols-2">
                <motion.div
                  className="rounded-l-2xl"
                  style={{
                    height: "450px",
                    overflow: "hidden",
                    width: "225px",
                    backgroundPosition: "center",
                  }}
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <motion.img
                    src={foundersData[active].src}
                    alt={foundersData[active].name}
                    className="h-full w-full rounded-l-2xl object-cover object-center"
                    whileHover={{
                      scale: 1.1,
                    }}
                  />
                </motion.div>
                <div className="w-full flex flex-col items-center p-6 gap-4">
                  <div className="text-center">
                    <h1 className="mt-10 text-foreground w-full flex justify-center text-2xl">
                      {foundersData[active].name}
                    </h1>
                    <p className="text-[10px] text-muted-foreground">
                      {foundersData[active].designation}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2 items-center">
                    <IconMapPin className="w-6 h-6 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {foundersData[active].location}
                    </p>
                  </div>
                  <p className="text-md text-foreground">
                    {foundersData[active].founderMessage
                      .split(" ")
                      .map((word, index) => {
                        return (
                          <motion.span
                            key={word}
                            className="inline-block mr-1"
                            initial={{
                              opacity: 0,
                              y: 5,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.1,
                              ease: "easeInOut",
                              delay: 0.01 * index,
                            }}
                          >
                            {word}&nbsp;
                          </motion.span>
                        );
                      })}
                  </p>
                </div>
              </motion.div>
            }
          />
        )}
      </div>
    </div>
  );
};

/**
 *  name: "Shalini Menon",
    designation: "Co-Founder & CTO",
    bio:
      "Shalini is a seasoned technologist with deep expertise in cloud computing, distributed systems, and AI. Before co-founding the company, she built scalable architectures for leading Indian fintech and AI startups.",
    skills: ["Cloud Architecture", "AI/ML", "System Design", "DevOps"],
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/rohitmenon",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 */
export default Founders;
