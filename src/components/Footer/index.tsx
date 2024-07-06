import { FooterDataInterface } from '@/types';
import Link from 'next/link'
import React from 'react'


interface Props {
  data: Array<FooterDataInterface>;
}

const Footer = ({ data }: Props) => {
  return (
    <footer className='flex flex-col gap-8 pb-6'>
      <div className='block bg-border h-[1px]'></div>
        <div className='flex justify-around md:gap-[100px] md:justify-center text-white-4 text-sm'>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 text-center'>
            {data.map((item, index) => ((
              <Link key={index} href={item.url}>{item.title}</Link>
            )))}
          </div>
        </div>
    </footer>
  )
}

export default Footer