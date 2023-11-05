import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import ToggleButton from "./toggle-button/ToggleButton";
import Links from "./links/Links";
import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimentions";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const { windowWidth } = useWindowDimensions();
  const [color, setColor] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    }
    if (window.scrollY === 0) {
      setColor(false);
    }
  };

  const scrollToTop = () => {

    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 700);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      {
        windowWidth < 767 ? (
          <>
            <motion.nav 
            className={` ${
              color ? `bg-white text-black shadow-md delay-[400ms]` : `${open ? "bg-white text-black " : "text-white bg-transparent"}`
            } flex items-center justify-between p-6 fixed transition-all ease-in w-full z-10`} 
            animate={open ? "open" : "closed"}>
                <div 
                className={`link link-underline ${open ? "link-underline-black" : "link-underline-white"} text-4xl font-semibold`}
                >
                  <Link to={"/"}>
                    HNGS
                  </Link>
                </div>
                <motion.div 
                onClick={() => {
                  setOpen(!open)
                  scrollToTop()
                }}
                className={`link link-underline fixed top-16 left-0 bottom-0 w-full ${open ? "bg-white" : ""} transition-all text-black duration-700`} variants={variants}
                >
                  <Links setOpen={setOpen} open={open} />
                </motion.div>
                <ToggleButton setOpen={setOpen} open={open} color={color}/>
            </motion.nav>
          </>
        ) : (
          <>
            <nav
              className={`${
                color ? "bg-white shadow-md delay-[400ms]" : ""
              } flex items-center w-full p-8 fixed transition-all ease-in z-10`}
            >
              <ul className="flex items-center justify-between w-full">
                <li 
                onClick={() => {scrollToTop()}}
                className={`${ color ? "text-black link-underline-black sm:text-2xl lg:text-4xl xl:text-6xl" : "text-white sm:text-5xl lg:text-6xl xl:text-8xl link-underline-white"} link link-underline font-semibold transition-all ease-in duration-500 }`}>
                  <Link to="/">
                    <span>HNGS</span>
                  </Link>
                </li>
                {NAV_ITEMS
                  ? NAV_ITEMS.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => {scrollToTop()}}
                        className={`font-semibold link link-underline ${
                          item.name === "CONTACT"
                            ? `${
                                color
                                  ? "text-black link-underline-black sm:text-2xl lg:text-4xl xl:text-6xl"
                                  : "text-white link-underline-white sm:text-5xl lg:text-6xl xl:text-8xl"
                              } stroke-font transition-all ease-in duration-500`
                            : `${
                                color
                                  ? "text-black link-underline-black sm:text-2xl lg:text-4xl xl:text-6xl"
                                  : "text-white link-underline-white sm:text-5xl lg:text-6xl xl:text-8xl"
                              } transition-all ease-in duration-500`
                        }`}
                      >
                        <Link to={item.to}>
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            </nav>
          </>
        )
      }
    </>
  );
};

export default Navbar;
