import { LinkInterface } from "@/types"
import React from "react"
import { AndroidIcon, AppleIcon, BrowserIcon } from "../../../public/icons"

interface Props {
  data: Array<LinkInterface>
  disabled?: boolean
}

const Platform = ({ data, disabled = false }: Props) => {
  const handleClick = (url: string) => {
    if (disabled || url === '') return
    window.open(url)
  }

  return (
    <ul className="flex items-center gap-3">
      {data.map((item, index) => (
        <li
          key={index}
          className="mt-2 md:mt-3 text-primary py-1 text-xs flex-wrap rounded flex items-start"
        >
          {item.title === "website" && (
            <div
              onClick={() => handleClick(item.url)}
              className="cursor-pointer"
            >
              <BrowserIcon className="stroke-primary h-5 w-5" />
            </div>
          )}
          {item.title === "android" && (
            <div
              onClick={() => handleClick(item.url)}
              className="cursor-pointer"
            >
              <AndroidIcon className="stroke-primary h-5 w-5" />
            </div>
          )}
          {item.title === "ios" && (
            <div
              onClick={() => handleClick(item.url)}
              className="cursor-pointer"
            >
              <AppleIcon className="stroke-primary h-5 w-5" />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Platform
