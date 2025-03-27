import { Fragment, useEffect } from "react";
import { useSanity } from "../../hooks/useSanity";
import { Hero, About, Contact, AllProjects, Loading } from "../../components";
import { FetchError } from "../../components";

const WorkContainer = () => {
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
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="h-max mb-20">
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
    </div>
  );
};

export default WorkContainer;
