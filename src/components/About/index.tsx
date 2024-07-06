import React from "react"

interface Props {
  description: string;
}

const About = ({description}: Props) => {
  return (
    <section>
      <div>
        <h2 className="text-base font-medium md:text-lg md:font-normal mb-2">About Me</h2>
        <p className="flex flex-col gap-3 text-white-4 leading-[1.8] md:leading-[1.6] text-sm md:text-base">
          {description}
        </p>
      </div>
    </section>
  )
}

export default About
