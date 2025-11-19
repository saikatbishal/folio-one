import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
}

export const useWindowSize = (mobileBreakpoint: number = 768): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
      isMobile: width <= mobileBreakpoint,
    };
  });

  useEffect(() => {
    // Debounce resize events for better performance
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
          width,
          height,
          isMobile: width <= mobileBreakpoint,
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileBreakpoint]);

  return windowSize;
};
