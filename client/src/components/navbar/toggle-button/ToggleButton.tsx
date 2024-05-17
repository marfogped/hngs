import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

type ToggleButtonProps = {
  setOpen: (value: boolean) => void;
  open: boolean;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ setOpen, open }) => {
  const location = useLocation();

  return (
    <button
      className={`${location.pathname === "/contact" ? ` ${open ? "stroke-black": "stroke-white"}` : "stroke-black"}`}
      onClick={() => setOpen(!open)}
    >
      <svg height="35" viewBox="0 0 20 17">
        <motion.path
          strokeWidth="1"
          strokeLinecap="round"
          initial={false}
          animate={{ d: open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }}
        />
        <motion.path
          strokeWidth="1"
          strokeLinecap="round"
          initial={false}
          animate={{
            d: open ? "M 3 2.5 L 17 16.346" : "M 2 9.423 L 20 9.423",
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
