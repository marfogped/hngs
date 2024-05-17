import React from "react";

interface AboutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const formattedText = data.aboutDescription.split('\n').map((paragraph: string, index: number) => (
    <p className="xs:text-2xl sm:text-3xl my-2" key={index}>{paragraph}</p>
  ));
  return (
    <section
      id="about"
      className="grid md:grid-cols-4 xs:grid-rows-0 xs:grid-cols-1 p-8 py-36 max-h-max xl:w-3/4 xs:w-full mx-auto place-content-center"
    >
      <div className="col-span-1">
        <h1 className="text-xl font-semibold">
          {data.aboutTitle.toUpperCase()}
        </h1>
      </div>

      <div className="col-span-3 xs:mt-8 sm:mt-8 md:mt-0">
        {formattedText}
      </div>
    </section>
  );
};

export default About;
