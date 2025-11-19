import { motion } from "framer-motion";

const brands = ["Google", "Apple", "Microsoft", "Amazon", "Netflix", "Meta"];

export default function AnimatedBrandScroll() {
  // Removed unnecessary useAnimationFrame and useRef for simpler, more efficient animation
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
