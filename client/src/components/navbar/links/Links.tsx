import { motion } from "framer-motion";
import { NAV_ITEMS } from "../../../constants";
import { Link } from "react-router-dom";
import React from "react";
import { useSanity } from "../../../hooks/useSanity";
import { SocialMediaInt } from "../../../constants/types";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedInIcon,
  BehanceIcon,
} from "../../icons/Icons";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

type LinksProps = {
  setOpen: (value: boolean) => void;
  open: boolean;
};

const Links: React.FC<LinksProps> = ({ setOpen, open }) => {

  const { socialMedia } = useSanity();

  return (
    <>
      <motion.div className="absolute w-full h-full flex flex-col items-start justify-center gap-10 ml-20" variants={variants}>
        {NAV_ITEMS.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`text-5xl font-semibold link link-underline ${open ? "link-underline-black" : "link-underline-white"}`}
            onClick={() => {setOpen(!open)}}
          >
              <Link to={item.to}>
                  <span>{item.name}</span>
              </Link>
          </motion.div>
        ))}
        <div className="flex gap-8 mt-20">

          {
            socialMedia ? (
              socialMedia.map((media: SocialMediaInt) => (
                <motion.div
                key={media.socialMedia}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
                >
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
                </motion.div>
              ))
            ) : ("")
          }
        </div>

      </motion.div>

    </>
  );
};

export default Links;