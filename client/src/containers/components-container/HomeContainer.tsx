import React, { Fragment } from "react";
import { Hero, About, Portfolio, Contact, Footer } from "../../components";

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
              {section.type === "portfolio" && <Portfolio data={section} />}
              {section.type === "contact" && <Contact data={section} />}
              {section.type === "footer" && <Footer data={section} />}
            </Fragment>
          ))
        : ""}
    </>
  );
};

export default HomeContainer;
