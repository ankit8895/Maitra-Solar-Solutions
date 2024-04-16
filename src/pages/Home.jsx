import React, { useState } from 'react';
import Section from '../components/Section';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';

import { Typography } from '@material-tailwind/react';
import safetyFirst from '../assets/images/safetyFirst.png';

const Home = () => {
  const heroGrid = [
    {
      alt: 'image1',
      src: hero1,
    },
    {
      alt: 'image2',
      src: hero2,
    },
    {
      alt: 'image3',
      src: hero3,
    },
  ];
  const [active, setActive] = useState(heroGrid[0]);
  return (
    <Section>
      <figure className='relative lg:h-96 h-4/5 w-full px-6 block lg:hidden'>
        <img
          src={safetyFirst}
          alt='safety logo'
          className='absolute -right-2 -top-3 h-40 w-40 lg:right-60 lg:top-4 lg:h-60 lg:w-60 bg-white rounded-full shadow-xl shadow-blue-gray-900/50'
        />
        <img
          className='h-full w-full lg:w-1/2 rounded-xl object-fill object-center shadow-xl shadow-blue-gray-900/50'
          src={active.src}
          alt={active.alt}
        />

        <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-6rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
          <Typography
            variant='h5'
            color='blue-gray'
            className='text-justify text-[10px] md:text-xl lg:text-base'
          >
            At Maitra Solar Solutions, we offer a comprehensive range of solar
            services tailored to meet the needs of private, commercial, and
            government sectors. Whether you're looking for installation,
            maintenance, or repair, our dedicated team is here to support you
            every step of the way.
          </Typography>
        </figcaption>
      </figure>
      <div className='grid lg:hidden grid-cols-3 gap-1 md:gap-4 px-6 pt-4'>
        {heroGrid.map((item, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(item)}
              src={item.src}
              className='h-full w-full cursor-pointer rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              alt={item.alt}
            />
          </div>
        ))}
      </div>

      <div className='hidden lg:grid grid-cols-2 gap-2'>
        <figure className='relative'>
          <img
            className='h-full w-full rounded-xl object-contain object-center shadow-xl shadow-blue-gray-900/50'
            src={hero1}
            alt='image1'
          />
        </figure>
        <figure className='relative'>
          <img
            className='h-full w-full rounded-xl object-fill object-center shadow-xl shadow-blue-gray-900/50'
            src={hero3}
            alt='image2'
          />
        </figure>
      </div>
      <img
        src={safetyFirst}
        alt='safety logo'
        className='absolute -right-2 -top-3 h-40 w-40 lg:right-[37rem] lg:top-1 bg-white rounded-full shadow-xl shadow-blue-gray-900/50 hidden lg:block'
      />
      <figcaption className='absolute bottom-32 left-2/4 lg:flex w-[calc(100%-6rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm hidden'>
        <Typography
          variant='h5'
          color='blue-gray'
          className='text-justify text-[10px] md:text-xl lg:text-base'
        >
          At Maitra Solar Solutions, we offer a comprehensive range of solar
          services tailored to meet the needs of private, commercial, and
          government sectors. Whether you're looking for installation,
          maintenance, or repair, our dedicated team is here to support you
          every step of the way.
        </Typography>
      </figcaption>
    </Section>
  );
};

export default Home;
