import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const brands = ["Google", "Apple", "Microsoft", "Amazon", "Netflix", "Meta"];

export default function AnimatedBrandScroll() {
  const baseX = useRef(0);

  useAnimationFrame(() => {
    const speed = 0.05; // pixels per ms
    baseX.current -= speed;
  });

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-50 py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="mx-8 text-2xl font-semibold text-gray-700 opacity-80 hover:opacity-100 transition"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
