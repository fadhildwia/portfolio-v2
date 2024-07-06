import React from 'react'

interface Props {
  data: Array<string>;
}

const TechStack = ({ data }: Props) => {
  return (
    <ul className="flex flex-wrap items-center">
      {data.map((tech, key) => (
        <li key={key} className="mt-2 md:mt-3 text-primary py-1 text-xs rounded flex items-start">
          {tech}
          {key !== data.length - 1 && <span className="mx-3">-</span>}
        </li>
      ))}
    </ul>
  )
}

export default TechStack