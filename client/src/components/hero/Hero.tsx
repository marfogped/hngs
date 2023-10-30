import React from "react";

interface HeroProps {
  data?: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${data.heroImage})` }}
    ></section>
  );
};

export default Hero;
