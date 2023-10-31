import { motion } from "framer-motion";
import { NAV_ITEMS } from "../../../constants";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {

  return (
    <motion.div className="absolute w-full h-full flex flex-col items-center justify-center gap-4" variants={variants}>
      {NAV_ITEMS.map((item) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl"
        >
            <Link to={item.to}>
                <span>{item.name}</span>
            </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;