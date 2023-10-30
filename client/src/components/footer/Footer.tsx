import React from "react";
import { FOOTER_ITEMS } from "../../constants";
import { Link } from "react-router-dom";

interface FooterProps {
  data: any;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="flex xs:flex-col xs:justify-start items-center md:justify-between p-6 border-t border-gray-500">
      <div>
        <ul className="flex items-center gap-6">
          {FOOTER_ITEMS
            ? FOOTER_ITEMS.map((link) => (
                <li className="underline text-sm font-normal">
                  <Link to={link.to}>{link.name}</Link>
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
