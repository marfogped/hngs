import React from "react";

interface HeroProps {
  data?: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section
      className="bg-cover bg-center w-full h-screen relative"
      style={{ backgroundImage: `url(${data.heroImage})` }}
    >
      <div className="bg-black/40 h-screen w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default Hero;
