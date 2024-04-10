import React from 'react';
import Section from '../components/Section';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';

import { Typography } from '@material-tailwind/react';

const Portfolio = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem]'>
            <img
              className='h-full w-full object-cover object-center'
              src={about1}
              alt='image1'
            />
          </div>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem] flex flex-col items-center justify-around'>
            <Typography as='div'>
              <Typography
                variant='h5'
                className='text-center text-[11px] md:text-2xl lg:text-4xl'
              >
                Operations and maintenance
              </Typography>
              <Typography
                variant='paragraph'
                className='text-center text-[8px] md:text-lg lg:text-2xl'
              >
                Maintenance start as per contract type
              </Typography>
            </Typography>
            <Typography as='div' className='flex flex-row gap-10 items-center'>
              <Typography as='ul' className=''>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>Drone Thermography</Typography>
                </Typography>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>PV Analyzer</Typography>
                </Typography>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>Chemical Cleaning</Typography>
                </Typography>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>Nano Coating-Modules</Typography>
                </Typography>
              </Typography>
              <Typography as='ul'>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>Rooftop</Typography>
                </Typography>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>C&I</Typography>
                </Typography>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>Utility</Typography>
                </Typography>
                <Typography as='li' className='list-disc'>
                  <Typography variant='small'>Solar street lights</Typography>
                </Typography>
              </Typography>
            </Typography>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem] flex flex-col items-center justify-around'>
            <Typography as='div'>
              <Typography
                variant='h5'
                className='text-center text-[11px] md:text-2xl lg:text-4xl'
              >
                Project & Materials Management
              </Typography>
              <Typography
                variant='paragraph'
                className='text-center text-[8px] md:text-lg lg:text-2xl'
              >
                Maintenance start as per contract type
              </Typography>
            </Typography>
            <Typography as='ul' className='flex flex-col items-center'>
              <Typography as='li' className='list-disc'>
                <Typography variant='small'>Revamping</Typography>
              </Typography>
              <Typography as='li' className='list-disc'>
                <Typography variant='small'>Reusing waste spares</Typography>
              </Typography>
              <Typography as='li' className='list-disc'>
                <Typography variant='small'>
                  Reusing technical equipment
                </Typography>
              </Typography>
            </Typography>
          </div>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem]'>
            <img
              className='h-full w-full object-cover object-center'
              src={about2}
              alt='image2'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
