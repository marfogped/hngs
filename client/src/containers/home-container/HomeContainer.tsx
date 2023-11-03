import { Fragment, useEffect } from "react";
import { Hero, About, Portfolio, Contact, Footer } from "../../components";
import { useSanity } from "../../hooks/useSanity";
import { FetchError } from "../../components";

const HomeContainer = () => {
  
  const { getHomePage, homeSection, isLoading, fetchError } = useSanity();

  useEffect(() => {
    if (!homeSection.length) getHomePage();
  });
  return (
    <>
      {
        isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            {
              fetchError ? (
                <FetchError />
              ) : (
                <>
                  {homeSection
                    ? homeSection.map((section) => (
                        <Fragment key={section.type}>
                          {section.type === "hero" && <Hero data={section} type="home" />}
                          {section.type === "about" && <About data={section} />}
                          {section.type === "portfolio" && <Portfolio data={section} />}
                          {section.type === "contact" && <Contact data={section} />}
                        </Fragment>
                      ))
                    : ""}
                </>
              )
            }
          </>
        )
      }
    </>
  );
};

export default HomeContainer;
