import { AllProjectsInt } from "../../constants/types";
import { Link } from "react-router-dom";

const AllProjects = ({ projects }: AllProjectsInt) => {
  return (
    <section className="min-h-min w-full xs:p-0 sm:p-0 p-6 xs:mt-20 sm:mt-20">
      <h2 className="xs:text-3xl sm:text-3xl md:text-5xl mb-20 ml-10">Projects</h2>
      <div 
      className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xs:gap-3 sm:gap-3 md:gap-6"
      >
        {
          projects ? (
            projects.map((project, projectIdx) => {
              const link = project.name.toLowerCase().replaceAll(" ", "-")
              return(
              <article 
              className="xs:h-[90vh] sm:h-[90vh] md:h-[80vh] group hover:bg-stone-50 hover:shadow-md transition-all duration-300 ease-in-out" 
              key={projectIdx}
              >
                <Link to={link}>
                  <div className="xs:h-5/6 sm:h-5/6 md:h-[90%]">
                    <img className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" src={project.portfolioImages[0]?.imageUrl} alt={`${project.name} image`} />
                  </div>
                  <div className="xs:h-1/6 sm:h-1/6 md:h-[10%] xs:pt-3 xs:pl-3 sm:pt-3 sm:pl-3">
                    <span className="block font-medium text-black lg:text-xl">{project.name}</span>
                    <span className="block font-normal text-stone-600">{project.location}</span>                  
                  </div>
                </Link>
              </article>
            )})
          ) : (
            ""
          )
        }
      </div>
    </section>
  )
}

export default AllProjects