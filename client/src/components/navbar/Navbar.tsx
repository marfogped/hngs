import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import { Bars2Icon } from "@heroicons/react/24/solid";
import useWindowDimensions from "../../hooks/useWindowDimentions";

const Navbar = () => {
  const { windowWidth } = useWindowDimensions();
  const [color, setColor] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    }
    if (window.scrollY === 0) {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={`${
        color ? "bg-white shadow-md delay-[400ms]" : ""
      } flex items-center w-full p-8 fixed transition-all ease-in`}
    >
      <ul className="flex items-center justify-between w-full">
        {windowWidth < 480 ? (
          <>
            <li
              className={`${
                color ? "text-black" : "text-white"
              } text-4xl font-semibold`}
            >
              <span>HNGS</span>
            </li>
            <li
              className={`${
                color ? "text-black" : "text-white"
              } text-8xl font-semibold`}
            >
              {" "}
              <Bars2Icon className="h-12" />{" "}
            </li>
          </>
        ) : (
          <>
            {NAV_ITEMS
              ? NAV_ITEMS.map((item) => (
                  <li
                    key={item.name}
                    className={`font-semibold ${
                      item.name === "CONTACT"
                        ? `${
                            color
                              ? "text-black xl:text-6xl"
                              : "text-white sm:text-5xl lg:text-6xl xl:text-8xl"
                          } stroke-font transition-all ease-in duration-500`
                        : `${
                            color
                              ? "text-black xl:text-6xl"
                              : "text-white sm:text-5xl lg:text-6xl xl:text-8xl"
                          } transition-all ease-in duration-500`
                    }`}
                  >
                    <Link to={item.to}>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))
              : ""}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
