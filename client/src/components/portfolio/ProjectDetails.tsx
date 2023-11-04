/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { Contact } from "../index"
import { useSanity } from "../../hooks/useSanity"
import { motion, useInView } from "framer-motion"

const slideUp = {
  initial: {
      y: "10%",
      opacity: 0
  },
  open: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {duration: 0.5, delay: 0.2 * i}
  }),
  closed: {
      y: "10%",
      opacity: 0,
      transition: {duration: 0.5}
  }
}

const ProjectDetails = () => {

  const { getProjectByName ,currentProject, setCurrentProject } = useSanity();
  const { project } = useParams();

  const projects = useRef(null);
  const isInView = useInView(projects)

  useEffect(() => {
    const getData = async () => {
      if(!currentProject.name){
        const projectName = project?.replaceAll("-", " ")
        getProjectByName(projectName)
      }
    }
    getData()
    
    return () => {
      setCurrentProject({_id: '', name: '', description: '', location: '', portfolioImages: []})
    }
  }, [])
  return (
    <>
      <header
        className="bg-cover bg-center w-full h-[60vh] relative"
        style={{ backgroundImage: `url(${currentProject?.portfolioImages[0]?.imageUrl})` }}
      >
        <div className="bg-black/40 h-[60vh] w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </header>

      <section className="relative">
        <div className="flex items-center ml-20 mb-24 xs:mt-12 sm:mt-12">
          <div className="title-line mr-6" />
          <h2 className="xs:text-3xl sm:text-3xl md:text-6xl">{currentProject?.name}</h2>
        </div>

        <div className="flex xs:flex-col sm:flex-col md:flex-row w-full h-[80vh] p-8">
          <div className="flex items-center justify-center xs:w-full sm:w-full md:w-1/2 p-4">
            <p className="text-lg">{currentProject.description}</p>
          </div>
          
          <img src={currentProject?.portfolioImages[0]?.imageUrl} className="xs:w-full sm:w-full xs:h-1/2 sm:h-1/2 md:h-full md:w-1/2 object-cover" alt="" />
        </div>

        <div className="w-full xs:mt-14 sm:mt-14 grid md:grid-cols-3 xs:grid-cols-2 sm:grid-cols-2 xs:gap-3 sm:gap-3 md:gap-8 p-8" ref={projects}>
          {
            currentProject?.portfolioImages?.length ? (
              currentProject.portfolioImages.map((image, imageIdx) => (
                <motion.div
                variants={slideUp} 
                custom={imageIdx} 
                animate={isInView ? "open" : "closed"} 
                key={imageIdx}
                className="h-full"
                >
                  <img src={image.imageUrl} className="md:h-full xs:h-72 sm:h-72 sm:w-full object-cover" alt="" />
                </motion.div>
              ))
            ) : ("")
          }
        </div>
        
        <Contact data={{contactTitle: "Want to get in touch?", contactDescription: ""}} />

      </section>
    </>
  )
}

export default ProjectDetails