/* eslint-disable react/no-unescaped-entities */
import { ProjectDataInterface } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import TechStack from "../TechStack";

interface Props {
  data: Array<ProjectDataInterface>;
}

const Project = ({ data }: Props) => {
  return (
    <section>
      <div>
        <h2 className="font-medium md:text-lg md:font-normal mb-3">
          Side Projects
        </h2>
        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="border border-border bg-background-3 p-6 rounded-lg shadow flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <h3 className="text-sm">{item.title}</h3>
                <Image
                  src="/icons/open-link.svg"
                  alt={"icon"}
                  width={16}
                  height={16}
                />
              </div>
              <p className="text-white-3 text-sm leading-[1.6] md:leading-[1.5] max-w-[800px]">
                {item.desc}
              </p>
              <TechStack data={item.techStack} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
