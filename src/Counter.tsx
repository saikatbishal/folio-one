import React, { useEffect } from "react";
import { motion } from "motion/react";
type Props = {
  /** The middle number, which also defines the number of steps in each direction */
  middle: number;
};

// This is the "base" width in pixels for each step.
// e.g., if middle is 10, the initial width of each button will be 10 * 5 = 50px.
const WIDTH_PER_STEP_PX = 5;

const Counter = ({ middle }: Props) => {
  const [counter, setCounter] = React.useState(middle);

  // Define min/max boundaries
  const minCounter = 0;
  const maxCounter = middle * 2;

  // This effect resets the counter if the 'middle' prop changes
  useEffect(() => {
    setCounter(middle);
  }, [middle]);

  // --- Event Handlers ---

  const handleMinus = () => {
    if (counter > minCounter) {
      setCounter((c) => c - 1);
    }
  };

  const handlePlus = () => {
    if (counter < maxCounter) {
      setCounter((c) => c + 1);
    }
  };

  const handleReset = () => {
    setCounter(middle);
  };

  // --- Derived Widths ---
  // We calculate the widths on every render based on the current counter state.

  // Steps remaining to go down (from current counter to 0)
  const minusStepsRemaining = counter - minCounter;
  
  // Steps remaining to go up (from current counter to max)
  const plusStepsRemaining = maxCounter - counter;

  // Calculate the dynamic width in pixels
  const minusWidth = minusStepsRemaining * WIDTH_PER_STEP_PX;
  const plusWidth = plusStepsRemaining * WIDTH_PER_STEP_PX;

  return (
    <div className="flex items-center justify-center h-max p-2 bg-neutral-900 w-full">
      {/* Minus Button */}
      <motion.button
        onClick={handleMinus}
        disabled={counter === minCounter}
        // Use the 'style' prop for dynamic widths
        style={{ width: `${minusWidth}px` }}
        // 'transition-all' animates the width change
        // 'overflow-hidden' hides the '-' text when width is 0
        // 'whitespace-nowrap' prevents text from wrapping during transition
        className={`cursor-pointer
          bg-neutral-500 text-amber-100 py-1 r 
          transition-all duration-200 ease-out 
          overflow-hidden whitespace-nowrap
          disabled:opacity-50
        `}
      >
        -
      </motion.button>

      {/* Middle Button */}
      <motion.button
        onClick={handleReset}
        className="cursor-pointer bg-neutral-700 text-amber-200 py-1 px-4"
      >
        {counter}
      </motion.button>

      {/* Plus Button */}
      <motion.button
        onClick={handlePlus}
        disabled={counter === maxCounter}
        // Use the 'style' prop for dynamic widths
        style={{ width: `${plusWidth}px` }}
        className={`cursor-pointer
          bg-neutral-500 text-amber-100 py-1  
          transition-all duration-200 ease-out 
          overflow-hidden whitespace-nowrap
          disabled:opacity-50
        `}
      >
        +
      </motion.button>
    </div>
  );
};

export default Counter;