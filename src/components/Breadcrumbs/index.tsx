import Link from 'next/link';
import React from 'react'
import { ChevronRightIcon } from '../../../public/icons';
import { LinkInterface } from '@/types';

interface Props {
  data: Array<LinkInterface>
}

const Breadcrumbs = ({ data }: Props) => {
  return (
    <nav className="flex">
      <ol className="inline-flex space-x-1 md:space-x-2">
        {data.map((item, index) => (
          <li key={index} className="inline-flex items-center text-xs sm:text-sm">
            {index !== data.length - 1 ? (
              <>
                <Link href={item.url} className="inline-flex items-center me-2 font-medium text-white-4 hover:text-primary">
                  {item.title}
                </Link>
                <ChevronRightIcon className="stroke-primary" />
              </>
            ) : (
              <div className="font-medium text-primary">{item.title}</div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs