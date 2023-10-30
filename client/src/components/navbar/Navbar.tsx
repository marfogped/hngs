import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import { Bars2Icon } from "@heroicons/react/24/solid";
import useWindowDimensions from "../../hooks/useWindowDimentions";

const Navbar = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <nav className="flex items-center w-full p-8 fixed">
      <ul className="flex items-center justify-between w-full">
        {windowWidth < 480 ? (
          <>
            <li className="text-4xl font-semibold text-white">
              <span>HNGS</span>
            </li>
            <li className="text-8xl font-semibold text-white">
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
                    className={`sm:text-5xl lg:text-6xl xl:text-8xl font-semibold ${
                      item.name === "CONTACT" ? "stroke-font" : "text-white"
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
