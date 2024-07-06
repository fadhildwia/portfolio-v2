import Image from 'next/image'
import React from 'react'

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header className='flex items-center gap-3'>
      <Image src='/images/logo.png' alt={'logo'} width={70} height={70} />
      <div>
        <h1 className='flex gap-1 text-base font-medium'>Fadhilah Dwi Ananda <Image src="/icons/verify.svg" alt={'icon'} height={15} width={15} /></h1>
        <h2 className='text-sm font-sm text-white-3'>{title}</h2>
      </div>
    </header>
  )
}

export default Header