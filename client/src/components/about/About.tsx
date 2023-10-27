import React from "react"

interface AboutProps {
  aboutTitle?: string | null;
  aboutDescription?: string | null;
}

const About: React.FC<AboutProps> = ({ aboutTitle, aboutDescription }) => {
  return (
    <div>
      {aboutTitle}
      <br />
      {aboutDescription}
    </div>
  )
}

export default About
