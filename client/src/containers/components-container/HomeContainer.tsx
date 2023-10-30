import React, { useState, useEffect, Fragment } from "react";
import { Hero, About } from "../../components";

interface Section {
  type?: "hero" | "about" | "portfolio" | "contact" | "footer";
  heroImage?: string | null;
  aboutTitle?: string | null;
  aboutDescription?: string | null;
  portfolioImages?: string[];
  contactTitle?: string[];
  contactDescription?: string[];
  footerMediaLinks?: string[];
}

interface Sections {
  sections: Section[];
}

const HomeContainer: React.FC<Sections> = ({ sections }) => {
  console.log(sections);
  return (
    <>
      {sections
        ? sections.map((section) => (
            <Fragment key={section.type}>
              {section.type === "hero" && <Hero data={section} />}
              {section.type === "about" && <About data={section} />}
            </Fragment>
          ))
        : ""}
    </>
  );
};

export default HomeContainer;
