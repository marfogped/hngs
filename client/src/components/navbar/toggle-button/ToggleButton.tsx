import { motion } from "framer-motion";
import React from "react";

type ToggleButtonProps = {
  setOpen: (value: boolean) => void;
  open: boolean;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ setOpen, open }) => {
  return (
    <button
      className={`${open ? "stroke-black" : "stroke-white"}`}
      onClick={() => setOpen(!open)}
    >
      <svg width="35" height="35" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          strokeLinecap="round"
          initial={false}
          animate={{ d: open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }}
        />
        <motion.path
          strokeWidth="3"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
        />
        <motion.path
          strokeWidth="3"
          strokeLinecap="round"
          initial={false}
          animate={{
            d: open ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
