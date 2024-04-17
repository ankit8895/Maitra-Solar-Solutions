import React from 'react';
import Section from '../components/Section';

import { Typography } from '@material-tailwind/react';

const Portfolio = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem]'>
            <img
              className='h-full w-full object-cover object-center'
              src='./assets/images/portfolio1.png'
              alt='image1'
            />
          </div>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem] flex flex-col items-center justify-evenly'>
            <Typography as='div'>
              <Typography
                variant='h5'
                className='text-xs md:text-2xl lg:text-4xl'
              >
                Operations and maintenance
              </Typography>
            </Typography>
            <Typography
              as='div'
              className='flex flex-row gap-10 items-start justify-center'
            >
              <ul className='pl-6 lg:pl-0'>
                <li className='list-disc'>
                  <Typography
                    variant='paragraph'
                    className='text-xs md:text-2xl lg:text-base md:mb-3 lg:mb-0'
                  >
                    Module cleaning
                  </Typography>
                </li>
                <li className='list-disc'>
                  <Typography
                    variant='paragraph'
                    className='text-xs md:text-2xl lg:text-base md:mb-3 lg:mb-0'
                  >
                    Inverter maintenance
                  </Typography>
                </li>
                <li className='list-disc'>
                  <Typography
                    variant='paragraph'
                    className='text-xs md:text-2xl lg:text-base md:mb-3 lg:mb-0'
                  >
                    Reporting
                  </Typography>
                </li>
                <li className='list-disc'>
                  <Typography
                    variant='paragraph'
                    className='text-xs md:text-2xl lg:text-base md:mb-3 lg:mb-0'
                  >
                    Module repair work
                  </Typography>
                </li>

                <li className='list-disc lg:hidden'>
                  <Typography
                    variant='paragraph'
                    className='text-xs md:text-2xl md:mb-3'
                  >
                    Plant performance
                  </Typography>
                </li>
                <li className='list-disc lg:hidden'>
                  <Typography
                    variant='paragraph'
                    className='text-xs md:text-2xl md:mb-3'
                  >
                    Inverter communication issues
                  </Typography>
                </li>
                <li className='list-disc lg:hidden'>
                  <Typography
                    variant='paragraph'
                    className='text-xs md:text-2xl md:mb-3'
                  >
                    String rectification
                  </Typography>
                </li>
              </ul>

              <ul className='hidden lg:block'>
                <li className='list-disc'>
                  <Typography
                    variant='paragraph'
                    className='text-xs lg:text-base'
                  >
                    Plant performance
                  </Typography>
                </li>
                <li className='list-disc'>
                  <Typography
                    variant='paragraph'
                    className='text-xs lg:text-base'
                  >
                    Inverter communication issues
                  </Typography>
                </li>
                <li className='list-disc'>
                  <Typography
                    variant='paragraph'
                    className='text-xs lg:text-base'
                  >
                    String rectification
                  </Typography>
                </li>
              </ul>
            </Typography>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem] flex flex-col text-start lg:items-center justify-evenly'>
            <Typography as='div' className='pl-2 lg:pl-0'>
              <Typography
                variant='h5'
                className='text-start text-xs md:text-2xl lg:text-4xl'
              >
                Other services
              </Typography>
            </Typography>
            <ul className='flex flex-col items-start justify-center pl-6 lg:pl-0'>
              <li className='list-disc'>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-2xl lg:text-base mb-1 md:mb-3 lg:mb-0'
                >
                  Drone Thermography
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-2xl lg:text-base mb-1 md:mb-3 lg:mb-0'
                >
                  Chemical Cleaning
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-2xl lg:text-base mb-1 md:mb-3 lg:mb-0'
                >
                  Nano Coating-Modules
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-2xl lg:text-base mb-1 md:mb-2 lg:mb-0'
                >
                  Revamping
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-2xl lg:text-base'
                >
                  Street lights
                </Typography>
              </li>
            </ul>
          </div>
          <div className='h-[16rem] md:h-[32rem] lg:h-[16rem]'>
            <img
              className='h-full w-full object-cover object-left lg:object-center'
              src='./assets/images/portfolio2.jpg'
              alt='image2'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
