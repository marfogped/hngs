import React from "react";
import { FOOTER_ITEMS } from "../../constants";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedInIcon,
  BehanceIcon,
} from "../icons/Icons";
import { Link } from "react-router-dom";

interface FooterProps {
  data: any;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="flex xs:flex-col sm:flex-col md:flex-row xs:justify-start items-center md:justify-between p-6 border-t border-gray-500">
      <div>
        <ul className="flex items-center gap-6">
          {FOOTER_ITEMS
            ? FOOTER_ITEMS.map((link, linkIdx) => (
                <li key={linkIdx} className="underline text-sm font-normal">
                  <Link to={link.to}>{link.name}</Link>
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4 xs:mt-4 sm:mt-4">
          {data && data.footerMediaLinks
            ? data.footerMediaLinks.map((media: any, mediaIdx: number) => (
                <li key={mediaIdx}>
                  {media?.socialMedia === "facebook" && (
                    <span>
                      <a target="_blank" href={media.mediaUrl}>
                        <FacebookIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "instagram" && (
                    <span>
                      <a target="_blank" href={media.mediaUrl}>
                        <InstagramIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "youtube" && (
                    <span>
                      <a target="_blank" href={media.mediaUrl}>
                        <YoutubeIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "linkedin" && (
                    <span>
                      <a target="_blank" href={media.mediaUrl}>
                        <LinkedInIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "behance" && (
                    <span>
                      <a target="_blank" href={media.mediaUrl}>
                        <BehanceIcon />
                      </a>
                    </span>
                  )}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
