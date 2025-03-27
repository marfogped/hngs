import { Link } from "react-router-dom";
import ViolaCreativeLogo from "../../assets/img/viola-creative-black.webp";
import { FOOTER_ITEMS } from "../../constants";
import { SocialMediaInt } from "../../constants/types";
import { useSanity } from "../../hooks/useSanity";
import {
  BehanceIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "../icons/Icons";

const Footer = () => {
  const { socialMedia } = useSanity();

  return (
    <footer className="flex flex-col items-center justify-center p-6 border-t border-gray-500">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
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
        <div className="flex items-center xs:mt-4 sm:mt-4 md:mt-0">
          <ul className="flex items-center gap-4">
            {socialMedia
              ? socialMedia.map((media: SocialMediaInt, mediaIdx: number) => (
                  <li key={mediaIdx}>
                    {media?.socialMedia === "facebook" && (
                      <span>
                        <a
                          aria-label={`${media?.socialMedia}`}
                          target="_blank"
                          href={media.mediaUrl}
                        >
                          <FacebookIcon />
                        </a>
                      </span>
                    )}

                    {media?.socialMedia === "instagram" && (
                      <span>
                        <a
                          aria-label={`${media?.socialMedia}`}
                          target="_blank"
                          href={media.mediaUrl}
                        >
                          <InstagramIcon />
                        </a>
                      </span>
                    )}

                    {media?.socialMedia === "youtube" && (
                      <span>
                        <a
                          aria-label={`${media?.socialMedia}`}
                          target="_blank"
                          href={media.mediaUrl}
                        >
                          <YoutubeIcon />
                        </a>
                      </span>
                    )}

                    {media?.socialMedia === "linkedin" && (
                      <span>
                        <a
                          aria-label={`${media?.socialMedia}`}
                          target="_blank"
                          href={media.mediaUrl}
                        >
                          <LinkedInIcon />
                        </a>
                      </span>
                    )}

                    {media?.socialMedia === "behance" && (
                      <span>
                        <a
                          aria-label={`${media?.socialMedia}`}
                          target="_blank"
                          href={media.mediaUrl}
                        >
                          <BehanceIcon />
                        </a>
                      </span>
                    )}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>

      <a
        href="https://www.violacreative.com/"
        className="flex flex-row items-center gap-1 mt-6"
      >
        <span className="text-[12px] text-gray-500">Developed by</span>
        <img
          src={ViolaCreativeLogo}
          alt="Viola Creative Logo"
          height={15}
          width={100}
          loading="lazy"
        />
      </a>
    </footer>
  );
};

export default Footer;
