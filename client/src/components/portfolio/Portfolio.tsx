/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";
import { useSanity } from "../../hooks/useSanity";

interface PortfolioProps {
  data: any;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {

  const { setCurrentProject } = useSanity()
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 700);
  }

  return (
    <section className="grid md:grid-cols-4 md:grid-rows-2 w-full xs:min-h-[80vh] md:h-[170vh]">
      {data && data.portfolio
        ? data.portfolio.map((image: any, imageIdx: number) => {
          const link = image.name.toLowerCase().replaceAll(" ", "-");
          return(
            <article 
            key={imageIdx} 
            className="cursor-pointer relative flex flex-col justify-center overflow-hidden bg-gray-50"
            onClick={()=> {
              setCurrentProject(image)
              scrollToTop()
            }}
            >
              <Link to={`/work/${link}`} className="h-full">
                <div className="group relative m-0 flex h-full w-full">
                  <div className="xs:h-[70vh] sm:h-[70vh]  md:h-full w-full overflow-hidden grayscale transition duration-300 ease-in-out group-hover:grayscale-0 relative">
                    <div className="transition duration-300 ease-in-out group-hover:bg-black/40 z-[5] h-full w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                    <img src={image?.portfolioImages[0].imageUrl} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                  </div>
                  <div className="absolute bottom-0 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="opacity-0 group-hover:opacity-100 text-2xl font-bold text-white transition duration-300 ease-in-out">{image?.name}</h1>
                  </div>
                </div>
              </Link>
            </article>
          )})
        : ""}
    </section>
  );
};

export default Portfolio;
