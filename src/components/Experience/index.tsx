import { ExperienceDataInterface } from "@/types"
import React from "react"

interface Props {
  data: Array<ExperienceDataInterface>
}

const Experience = ({ data }: Props) => {
  return (
    <section>
      <div>
        <h2 className="text-base font-medium md:text-lg md:font-normal mb-3">
          Experience
        </h2>
        {data.map((item, index) => (
          <div key={index} className="leading-[1.8] md:leading-[1.5] text-sm md:text-base mb-5">
            <p className="text-xs md:text-sm text-primary">
              {item.date}
            </p>
            <h3 className="my-1">{item.position} - {item.company}</h3>
            <p className="leading-[1.6] text-white-4">
              {item.desc}
            </p>
            <ul className="flex flex-wrap items-center gap-[6px] mt-3 md:mt-0">
              {item.techStack.map((tech, key) => (
                <li key={key} className="md:mt-3 bg-background-2 text-primary py-1 px-2 border border-border text-xs rounded shadow-md shadow-primary/35">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
