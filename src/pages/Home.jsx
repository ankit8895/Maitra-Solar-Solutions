import React, { useState } from 'react';
import Section from '../components/Section';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';
import hero4 from '../assets/images/hero4.jpg';

import { Typography } from '@material-tailwind/react';

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
    {
      alt: 'image4',
      src: hero4,
    },
  ];
  const [active, setActive] = useState(heroGrid[0]);
  return (
    <Section>
      <figure className='relative lg:h-96 h-4/5 w-full'>
        <img
          className='h-full w-full rounded-xl object-cover object-center'
          src={active.src}
          alt={active.alt}
        />
        <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
          <div className=''>
            <Typography
              variant='h5'
              color='blue-gray'
              className='text-center text-xs md:text-xl'
            >
              At Maitra Solar Solutions, we offer a comprehensive range of solar
              services tailored to meet the needs of private, commercial, and
              government sectors. Whether you're looking for installation,
              maintenance, or repair, our dedicated team is here to support you
              every step of the way.
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className='grid grid-cols-4 gap-4 pt-2'>
        {heroGrid.map((item, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(item)}
              src={item.src}
              className='h-full w-full cursor-pointer rounded-lg object-cover object-center'
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Home;
