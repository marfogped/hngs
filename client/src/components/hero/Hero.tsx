import React from "react"

interface HeroProps {
  heroImage?: string | null;
}

const Hero: React.FC<HeroProps> = ({heroImage}) => {
  return (
    <section >
      <img src={heroImage ? heroImage : ''} alt="" />
    </section>
  )
}

export default Hero