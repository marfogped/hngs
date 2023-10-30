import React from "react";

interface AboutProps {
  data: any;
}

const About: React.FC<AboutProps> = ({ data }) => {
  console.log(data);

  return (
    <section className="grid grid-cols-2 xs:grid-rows-2 xs:grid-cols-1 p-8 h-[50vh] w-3/4 xs:w-full mx-auto place-content-center">
      <div>
        <h1 className="xs:text-3xl text-5xl font-semibold">
          {data.aboutTitle}
        </h1>
      </div>

      <div>
        <p className="xs:text-2xl text-4xl">{data.aboutDescription}</p>
      </div>
    </section>
  );
};

export default About;
