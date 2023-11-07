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
  const [hasTouched, setHasTouched] = useState(false);

  const scrollToTop = () => {
    setTimeout(() => {}, 50);
  };

  useEffect(() => {
    const nonHomeOptions = document.querySelectorAll(
      "ul#navbar-options li:not(#home-option)"
    );
    const homeOption = document.getElementById("home-option");
    const scrollThreshold = 100;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > scrollThreshold) {
        homeOption.style.display = "flex";
        nonHomeOptions.forEach((option) => {
          option.classList.add("hidden"); // Agrega la clase "hidden" para ocultar los elementos
        });
      } else {
        homeOption.style.display = "flex";
        nonHomeOptions.forEach((option) => {
          option.classList.remove("hidden"); // Elimina la clase "hidden" para mostrar los elementos
        });
      }
    });
  }, []);

  return (
    <>
      {windowWidth < 767 ? (
        <>
          <motion.nav
            className={` ${
              open ? "bg-white text-black " : "text-white bg-transparent"
            }
            flex items-center justify-between p-6 fixed transition-all ease-in w-full z-10`}
            animate={open ? "open" : "closed"}
          >
            <div
              className={`link link-underline ${
                open ? "link-underline-black" : "link-underline-white"
              } text-4xl font-semibold`}
              onClick={() => {
                scrollToTop();
                setOpen(false);
              }}
            >
              <Link to={"/"}>HNGS</Link>
            </div>
            <motion.div
              onTouchStart={() => {
                if (!hasTouched) {
                  setOpen(!open);
                  scrollToTop();
                  setHasTouched(true);
                }
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
            className={`flex items-center w-full p-8 fixed transition-all ease-in z-10`}
          >
            <ul
              id="navbar-options"
              className="flex items-center justify-between w-full group"
            >
              <li
                onClick={() => {
                  scrollToTop();
                }}
                id="home-option"
                className={`text-white sm:text-5xl lg:text-6xl xl:text-8xl link-underline-white
                link link-underline font-semibold transition-all ease-in duration-300 group-hover:flex`}
              >
                <Link to="/">
                  <span>HNGS</span>
                </Link>
              </li>
              {NAV_ITEMS
                ? NAV_ITEMS.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => {
                        scrollToTop();
                      }}
                      id={`${item.name.toLowerCase()}-option`}
                      className={`font-semibold link link-underline ${
                        item.name === "CONTACT"
                          ? `text-white link-underline-white sm:text-5xl lg:text-6xl xl:text-8xl stroke-font transition-all ease-in duration-500`
                          : `text-white link-underline-white sm:text-5xl lg:text-6xl xl:text-8xl transition-all ease-in duration-500`
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
