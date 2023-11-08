import { Fragment, useEffect } from "react";
import { useSanity } from "../../hooks/useSanity";
import { Hero, About, Contact, AllProjects, Loading } from "../../components";
import { FetchError } from "../../components";

const WorkContainer = () => {
  window.scrollTo({ top: 0 });

  const {
    getWorkPage,
    getAllProjects,
    workSection,
    allProjects,
    isLoading,
    fetchError,
  } = useSanity();

  useEffect(() => {
    if (!workSection.length) getWorkPage();
    if (!allProjects.length) getAllProjects();
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {fetchError ? (
            <FetchError />
          ) : (
            <>
              {workSection
                ? workSection.map((section) => (
                    <Fragment key={section.type}>
                      {section.type === "hero" && (
                        <Hero data={section} type="page" />
                      )}
                      {section.type === "about" && <About data={section} />}
                      {section.type === "portfolio" && (
                        <AllProjects projects={allProjects} />
                      )}
                      {section.type === "contact" && <Contact data={section} />}
                    </Fragment>
                  ))
                : ""}
            </>
          )}
        </>
      )}
    </>
  );
};

export default WorkContainer;
