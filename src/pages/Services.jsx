import React from 'react';
import Section from '../components/Section';

import services1 from '../assets/images/services1.jpg';
import services2 from '../assets/images/services2.jpg';
import services3 from '../assets/images/services3.jpg';
import services4 from '../assets/images/services4.jpg';

import { Carousel, Typography } from '@material-tailwind/react';

const Services = () => {
  const serviceGrid = [
    {
      src: services1,
      alt: 'services1',
      label: 'ASSET MONITORING',
    },
    {
      src: services2,
      alt: 'services2',
      label: 'REPORTING, DGR',
    },
    {
      src: services3,
      alt: 'services3',
      label: 'CLEANING',
    },
    {
      src: services4,
      alt: 'services4',
      label: 'MAINTENANCE',
    },
  ];
  return (
    <Section>
      <Typography variant='h2' className='text-center'>
        WHAT WE OFFER
      </Typography>
      <Typography variant='lead' className='text-center p-2'>
        Our comprehensive services encompass HOTO/Site Visit, Stabilization
        Period Commitment, Spare Management, Inventory/Spare, Compliance check,
        and Maintenance initiation as per contract type.
      </Typography>
      <Carousel
        className='rounded-xl h-[24rem]'
        autoplay={true}
        loop={true}
        auto
      >
        {serviceGrid.map((item, index) => (
          <div className='relative h-full w-full' key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
              <div className='w-3/4 text-center md:w-2/4'>
                <Typography
                  variant='h1'
                  color='white'
                  className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                >
                  {item.label}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Section>
  );
};

export default Services;
