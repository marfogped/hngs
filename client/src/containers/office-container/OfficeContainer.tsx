import { Fragment, useEffect } from "react";
import { useSanity } from "../../hooks/useSanity";
import { Hero, About, Contact, Members, Loading } from "../../components";
import { FetchError } from "../../components";

const OfficeContainer = () => {
  window.scrollTo({ top: 0 });

  const {
    getOfficePage,
    getAllMembers,
    officeSection,
    allMembers,
    isLoading,
    fetchError,
  } = useSanity();

  useEffect(() => {
    if (!officeSection.length) getOfficePage();
    if (!allMembers.length) getAllMembers();
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
            <div>
              {officeSection
                ? officeSection.map((section, sectionIdx) => (
                    <Fragment key={sectionIdx}>
                      {section.type === "hero" && (
                        <Hero data={section} type="page" />
                      )}
                      {section.type === "about" && <About data={section} />}
                      {section.type === "members" && (
                        <Members members={allMembers} />
                      )}
                      {section.type === "contact" && <Contact data={section} />}
                    </Fragment>
                  ))
                : ""}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default OfficeContainer;
