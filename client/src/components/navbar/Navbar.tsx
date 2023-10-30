import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full p-8 fixed">
      <ul className="flex items-center justify-between w-full">
        {NAV_ITEMS
          ? NAV_ITEMS.map((item) => (
              <li
                key={item.name}
                className={`text-8xl font-semibold ${
                  item.name === "CONTACT" ? "stroke-font" : "text-white"
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
  );
};

export default Navbar;
