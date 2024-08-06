import { useRouter } from 'next/router';
import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs';
import { LinkInterface, CardOneInterface } from '@/types';
import { PortfolioData } from '@/constants';
import TechStack from '@/components/TechStack';
import Platform from '@/components/Platform';
import Slider from "react-slick";

const Detail = () => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const data = PortfolioData.find((item) => item.link === router.asPath) || {} as CardOneInterface

  const BreadcrumbsData: LinkInterface[] = [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '',
      title: data.title as string
    }
  ]

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-6 md:gap-12">
      <Breadcrumbs data={BreadcrumbsData} />
      <h1 className='text-base sm:text-2xl font-medium'>{data.title}</h1>
      <p className="flex flex-col gap-3 text-white-4 leading-[1.8] md:leading-[1.6] text-sm md:text-base">
        {data.desc}
      </p>
      <div>
        {data.techStack && <TechStack data={data.techStack} />}
        {data.platform && <Platform data={data.platform} />}
      </div>
      <div>
      <div className='text-center font-bold text-lg'>SOON DETAIL IMAGE</div>
        {/* <h2 className='text-md sm:text-xl font-medium'>Website</h2> */}
        {/* <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div> */}
      </div>
    </div>
  )
}

export default Detail