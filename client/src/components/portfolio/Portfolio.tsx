/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface PortfolioProps {
  data: any;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  console.log(data);

  return (
    <section className="grid md:grid-cols-4 md:grid-rows-2 w-full xs:min-h-[70vh] md:h-[120vh]">
      {data && data.portfolioImages
        ? data.portfolioImages.map((image: any, imageIdx: number) => (
            <article key={imageIdx} className="cursor-pointer relative flex flex-col justify-center overflow-hidden bg-gray-50">
              <div className="group relative m-0 flex h-full w-full">
                <div className="h-full w-full overflow-hidden grayscale transition duration-300 ease-in-out group-hover:grayscale-0 relative">
                  <div className="transition duration-300 ease-in-out group-hover:bg-black/40 z-[5] h-full w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                  <img src={image?.imageUrl} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                </div>
                <div className="absolute bottom-0 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <h1 className="opacity-0 group-hover:opacity-100 text-2xl font-bold text-white transition duration-300 ease-in-out">{image?.name}</h1>
                </div>
              </div>
            </article>
          ))
        : ""}
    </section>
  );
};

export default Portfolio;
