import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FintaButton from "./FintaButton";
import FintaModal from "./FintaModal";
import { motion } from "motion/react";

const Navbar = ({ className }: { className?: string }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const links = (
    <div className="flex flex-col items-center gap-4 p-6">
      <Link
        to="/founders"
        className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-lg"
        onClick={() => setIsOpen(false)}
      >
        Founders
      </Link>
      <Link
        to="/guide"
        className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-lg"
        onClick={() => setIsOpen(false)}
      >
        Guide
      </Link>
      <Link
        to="/pricing"
        className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-lg"
        onClick={() => setIsOpen(false)}
      >
        Pricing
      </Link>
      <a
        href="/login"
        target="_blank"
        rel="noreferrer"
        className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-lg"
        onClick={() => setIsOpen(false)}
      >
        Log In
      </a>
      <FintaButton
        text="Get Started"
        href="/login"
        variant="primary"
        rounded="md"
        size="md"
      />
    </div>
  );

  return (
    <div className={className}>
      {!isMobile ? (
        <ul className={` ${className || ""} flex gap-6 items-center`}>
          <Link
            to="/founders"
            className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
          >
            Founders
          </Link>
          <Link
            to="/guide"
            className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
          >
            Guide
          </Link>
          <Link
            to="/pricing"
            className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
          >
            Pricing
          </Link>
          <li>
            <a
              href="/login"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
            >
              Log In
            </a>
          </li>
        </ul>
      ) : (
        <div className="flex items-center">
          <FintaButton
            text={
              <svg width="16" height="16" fill="none">
                <path
                  stroke="#0F0C0C"
                  stroke-linecap="square"
                  stroke-width="2"
                  d="M2 4h12M2 12h12"
                ></path>
              </svg>
            }
            size="md"
            variant="transparent"
            onClick={() => setIsOpen(true)}
            className="p-1"
            rounded="lg"
          />
        </div>
      )}

      {isMobile && isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -40}}
          animate={{ opacity: 1, scale: 1, y: 0}}
          exit={{ opacity: 0, scale: 0.8, y: -40 }}
          className="absolute top-0 left-0 w-full h-full bg-white z-999"
        >
          <FintaModal
            top="top"
            width="w-full"
            setIsOpen={setIsOpen}
            data={links}
            cardClassName=""
          />
        </motion.div>
      ) : null}
    </div>
  );
};

export default Navbar;
