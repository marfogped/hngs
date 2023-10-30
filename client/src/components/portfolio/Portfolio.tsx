import React from "react";

interface PortfolioProps {
  data: any;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  console.log(data);

  return (
    <section className="grid md:grid-cols-4 xs:grid-cols-2 xs:grid-rows-4 md:grid-rows-2 w-full xs:min-h-[70vh] md:h-[120vh]">
      {data && data.portfolioImages
        ? data.portfolioImages.map((image: any, imageIdx: number) => (
            <article className="" key={imageIdx}>
              <img
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in"
                src={image?.image}
                alt=""
              />
            </article>
          ))
        : ""}
    </section>
  );
};

export default Portfolio;
