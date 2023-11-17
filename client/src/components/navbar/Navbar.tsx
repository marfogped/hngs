import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const { windowWidth } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const nonHomeOptions = document.querySelectorAll(
      "ul#navbar-options li:not(#home-option)"
    );
    const homeOption = document.getElementById("navbar-options");

    const scrollThreshold = 100;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > scrollThreshold) {
        nonHomeOptions.forEach((option) => {
          option.classList.add("opacity-0");
        });
      } else {
        nonHomeOptions.forEach((option) => {
          option.classList.remove("opacity-0");
        });
      }
    };

    const handleHover = () => {
      nonHomeOptions.forEach((option) => {
        if (option instanceof HTMLElement) {
          option.style.opacity = "1";
        }
      });
    };

    const handleHoverOut = () => {
      nonHomeOptions.forEach((option) => {
        if (option instanceof HTMLElement) {
          option.style.opacity = "";
        }
      });
    };

    if (homeOption) {
      homeOption.addEventListener("mouseover", handleHover);
      homeOption.addEventListener("mouseout", handleHoverOut);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (homeOption) {
        homeOption.removeEventListener("mouseover", handleHover);
        homeOption.removeEventListener("mouseout", handleHoverOut);
      }
    };
  }, [isMounted]);

  return (
    <>
      {windowWidth < 767 ? (
        <>
          <motion.nav
            className={` ${ open ? `bg-white text-black` 
            :  `bg-transparent ${location.pathname === "/contact" ? "text-white" : "text-black"}` 
          }
            flex items-center justify-between p-6 fixed transition-all ease-in w-full z-10`}
            animate={open ? "open" : "closed"}
          >
            <div
              className={`link link-underline ${
                open ? "link-underline-black" : "link-underline-white"
              } text-4xl font-semibold`}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link to={"/"}>HNGS</Link>
            </div>
            <motion.div
              onTouchStart={() => {
                  setOpen(!open);
              }}
              className={`link link-underline fixed top-[88px] right-0 bottom-0 w-full text-black bg-white`}
              variants={variants}
            >
              <Links setOpen={setOpen} open={open} />
            </motion.div>
            <ToggleButton setOpen={setOpen} open={open} />
          </motion.nav>
        </>
      ) : (
        <>
          <nav
            className={`flex items-center w-full p-8 fixed transition-all duration-300 ease-in-out  z-10`}
          >
            <ul
              id="navbar-options"
              className="flex items-center justify-between w-full"
            >
              <li
                id="home-option"
                className={` ${location.pathname === "/contact" ? "text-white link-underline-white" : "text-black link-underline-black"} sm:text-5xl lg:text-6xl xl:text-8xl
                link link-underline font-semibold transition-all duration-300 ease-in-out`}
              >
                <Link to="/">
                  <span>HNGS</span>
                </Link>
              </li>
              {NAV_ITEMS
                ? NAV_ITEMS.map((item) => (
                    <li
                      key={item.name}
                      id={`${item.name.toLowerCase()}-option`}
                      className={`font-semibold link link-underline ${
                        item.name === "CONTACT"
                          ? `${location.pathname === "/contact" ? "text-white link-underline-white" : "text-black link-underline-black"} sm:text-5xl lg:text-6xl xl:text-8xl stroke-font transition-all duration-300 ease-in-out`
                          : `${location.pathname === "/contact" ? "text-white link-underline-white" : "text-black link-underline-black"} sm:text-5xl lg:text-6xl xl:text-8xl transition-all duration-300 ease-in-out`
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
      )}
    </>
  );
};

export default Navbar;
