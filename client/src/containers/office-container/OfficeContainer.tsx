import { Fragment, useEffect } from "react";
import { useSanity } from "../../hooks/useSanity";
import { Hero, About, Contact, Members } from "../../components";
import { FetchError } from "../../components";

const OfficeContainer = () => {
  const { getOfficePage, getAllMembers, officeSection, allMembers, isLoading, fetchError} = useSanity();

  useEffect(() => {
    if(!officeSection.length) getOfficePage()
    if(!allMembers.length) getAllMembers()
  });

  console.log(allMembers)

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
                <div>
                  { officeSection
                    ? officeSection.map((section, sectionIdx) => (
                        <Fragment key={sectionIdx}>
                          {section.type === "hero" && <Hero data={section} type="page" />}
                          {section.type === "about" && <About data={section} />}
                          {section.type === "members" && <Members members={allMembers} />}
                          {section.type === "contact" && <Contact data={section} />}
                        </Fragment>
                      ))
                    : ""}
                </div>
              )
            }
          </>
        )
      }
    </>
  )
}

export default OfficeContainer