import React from "react";

interface AboutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const About: React.FC<AboutProps> = ({ data }) => {

  return (
    <section className="grid md:grid-cols-4 xs:grid-rows-0 xs:grid-cols-1 p-8 h-[60vh] xl:w-3/4 xs:w-full mx-auto place-content-center">
      <div className="col-span-1">
        <h1 className="text-xl font-semibold">
          {data.aboutTitle.toUpperCase()}
        </h1>
      </div>

      <div className="col-span-3 xs:mt-8 sm:mt-8 md:mt-0">
        <p className="xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          {data.aboutDescription}
        </p>
      </div>
    </section>
  );
};

export default About;
