import { FOOTER_ITEMS } from "../../constants";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedInIcon,
  BehanceIcon,
} from "../icons/Icons";
import { SocialMediaInt } from "../../constants/types";
import { Link } from "react-router-dom";
import { useSanity } from "../../hooks/useSanity";

const Footer = () => {
  const { socialMedia } = useSanity();

  return (
    <footer className="flex xs:flex-col sm:flex-col md:flex-row xs:justify-start items-center md:justify-between p-6 border-t border-gray-500">
      <div>
        <ul className="flex items-center gap-6">
          {FOOTER_ITEMS
            ? FOOTER_ITEMS.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="xs:text-sm sm:text-sm md:text-base lg:text-lg font-normal"
                >
                  <div className="link-underline link-underline-black">
                    <Link to={link.to}>{link.name}</Link>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div className="flex items-center xs:mt-4 sm:mt-4 md:mt-0">
        <ul className="flex items-center gap-4">
          {socialMedia
            ? socialMedia.map((media: SocialMediaInt, mediaIdx: number) => (
                <li key={mediaIdx}>
                  {media?.socialMedia === "facebook" && (
                    <span>
                      <a aria-label={`${media?.socialMedia}`} target="_blank" href={media.mediaUrl}>
                        <FacebookIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "instagram" && (
                    <span>
                      <a aria-label={`${media?.socialMedia}`} target="_blank" href={media.mediaUrl}>
                        <InstagramIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "youtube" && (
                    <span>
                      <a aria-label={`${media?.socialMedia}`} target="_blank" href={media.mediaUrl}>
                        <YoutubeIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "linkedin" && (
                    <span>
                      <a aria-label={`${media?.socialMedia}`} target="_blank" href={media.mediaUrl}>
                        <LinkedInIcon />
                      </a>
                    </span>
                  )}

                  {media?.socialMedia === "behance" && (
                    <span>
                      <a aria-label={`${media?.socialMedia}`} target="_blank" href={media.mediaUrl}>
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
