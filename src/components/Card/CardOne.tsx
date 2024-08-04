import { PortfolioDataInterface } from '@/types'
import Link from 'next/link'
import React from 'react'
import Platform from '../Platform'
import TechStack from '../TechStack'
import Image from 'next/image'

const CardOne: React.FC<PortfolioDataInterface> = (item) => {
  return (
    <Link
      href={`/detail/${item.slug}`}
      className="border border-border bg-background-3 p-6 rounded-lg flex flex-col gap-2 shadow-sm shadow-primary/50 hover:shadow-primary"
    >
      <div className="flex justify-between">
        <h3 className="text-sm">{item.title}</h3>
        <Image
          src="/icons/open-link.svg"
          alt="icon"
          width={16}
          height={16}
        />
      </div>
      <p className="text-white-3 text-sm leading-[1.6] md:leading-[1.5] max-w-[800px] line-clamp-3">
        {item.desc}
      </p>
      <TechStack data={item.techStack} />
      <Platform data={item.platform} disabled />
    </Link>
  )
}

export default CardOne