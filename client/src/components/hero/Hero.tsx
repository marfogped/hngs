import React from "react";

interface HeroProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  type?: string;
}

const Hero: React.FC<HeroProps> = ({ data, type }) => {
  return (
    <>
      {
        type === "home" ? (
          <header
            className="bg-cover bg-center w-full h-screen relative"
            style={{ backgroundImage: `url(${data.heroImage})` }}
          >
            <div className="bg-black/40 h-screen w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </header>
        ) : (
          <header
            className="bg-cover bg-center w-full h-[60vh] relative"
            style={{ backgroundImage: `url(${data.heroImage})` }}
          >
            <div className="bg-black/40 h-[60vh] w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </header>
        )
      }
    </>
  );
};

export default Hero;
