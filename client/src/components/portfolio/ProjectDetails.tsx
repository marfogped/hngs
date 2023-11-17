/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSanity } from "../../hooks/useSanity";
import ParallaxGallery from "./ParallaxGallery";
import "./Portfolio.css";

const ProjectDetails = () => {
  const { getProjectByName, currentProject, setCurrentProject } = useSanity();
  const { project } = useParams();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
    const getData = async () => {
      if (!currentProject.name) {
        const projectName = project?.replaceAll("-", " ");
        getProjectByName(projectName);
      }
    };
    getData();

    return () => {
      setCurrentProject({
        _id: "",
        client: "",
        year: "",
        name: "",
        description: "",
        location: "",
        portfolioImages: [],
      });
    };
  }, []);

  return (
    <>
      <header
        className="bg-cover bg-center w-full h-[60vh] relative"
        style={{
          backgroundImage: `url(${currentProject?.portfolioImages[0]?.imageUrl})`,
        }}
      >
        <div className="h-[60vh] w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </header>

      <section className="relative min-h-max">
        <div className="flex items-center justify-start xs:ml-10 sm:ml-10 md:ml-20 xs:mb-6 sm:mb-6 md:mb-12 xs:mt-12 sm:mt-12 md:mt-24">
          <div className="title-line mr-6" />
          <h2 className="xs:text-3xl sm:text-3xl md:text-6xl">
            {currentProject?.name}
          </h2>
        </div>

        <div className="flex xs:flex-col sm:flex-col md:flex-row w-full xs:md:min-h-min sm:md:min-h-min md:min-h-[80vh] md:max-h-screen xs:p-0 sm:p-0 md:p-8">
          <div className="flex flex-col items-center justify-center xs:w-full sm:w-full md:w-1/2 p-4">
            <p className="xs:text-lg sm:text-lg smd:text-2xl">
              {currentProject?.description}
            </p>

            <div className="border-t border-black xs:mt-5 sm:mt-5 lg:mt-12 w-full py-2">
              <h3 className="font-semibold">CLIENT</h3>
              <p>{currentProject?.client}</p>
            </div>

            <div className="border-t border-black w-full py-2">
              <h3 className="font-semibold">LOCATION</h3>
              <p>{currentProject?.location}</p>
            </div>

            <div className="border-t border-b border-black mt-1 w-full py-2">
              <h3 className="font-semibold">YEAR</h3>
              <p>{currentProject?.year}</p>
            </div>
          </div>

          <div className="md:min-h-[80vh] md:max-h-screen xs:hidden sm:hidden md:flex md:w-1/2">
            <img
              src={currentProject?.portfolioImages[0]?.imageUrl}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="h-min w-full">
            {
              currentProject?.portfolioImages?.length
                ? currentProject.portfolioImages.map((image, imageIdx) => (
                    <ParallaxGallery key={imageIdx} image={image.imageUrl} />                  
                  ))
                : ""
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
