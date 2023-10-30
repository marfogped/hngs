import React from "react";

interface PortfolioProps {
  data: any;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  console.log(data);

  return (
    <section className="grid md:grid-cols-4 xs:grid-cols-2 xs:grid-rows-4 md:grid-rows-2 w-full xs:min-h-[50vh] md:h-[70vh]">
      {data && data.portfolioImages
        ? data.portfolioImages.map((image: string, imageIdx: number) => (
            <div className="" key={imageIdx}>
              <img className="h-full w-full object-cover" src={image} alt="" />
            </div>
          ))
        : ""}
    </section>
  );
};

export default Portfolio;
