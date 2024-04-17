import React from 'react';
import Section from '../components/Section';

import { Carousel, Typography } from '@material-tailwind/react';

const Services = () => {
  return (
    <Section>
      <Typography variant='h2' className='text-center'>
        WHAT WE OFFER
      </Typography>
      <Typography
        variant='lead'
        className='text-justify md:text-center text-sm md:text-base md:px-10 lg:px-16 lg:py-4 md:py-2'
      >
        Our comprehensive services encompass HOTO/Site Visit, Stabilization
        Period Commitment, Spare Management, Inventory/Spare, Compliance check,
        and Maintenance initiation as per contract type.
      </Typography>

      <div className='grid grid-flow-row gap-8 mt-10 md:mt-20'>
        <div className='md:px-10 lg:px-20'>
          <Typography variant='h5' className='mb-8'>
            1. Module cleaning
          </Typography>

          <div className='hidden md:flex flex-row gap-8 mb-8'>
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service1.jpeg'
              alt='service1'
            />
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service2.jpeg'
              alt='service2'
            />
          </div>

          <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            className='rounded-xl h-80 w-80 md:hidden mb-8'
          >
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service1.jpeg'
              alt='service1'
            />
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service2.jpeg'
              alt='service2'
            />
          </Carousel>

          <Typography
            variant='paragraph'
            className='text-justify text-sm md:text-base'
          >
            Solar panel cleaning is now a firmly established part of maintaining
            a solar panel array. If you own or maintain a commercial solar panel
            array, you will no doubt be interested in reaping the largest
            financial reward from your array and seeing your ROI as soon as
            possible. <br />
            <br />
            Solar panel cleaning will help you to do just that. Having dirty
            solar panels can severely dent your ROI time. By having clean solar
            panels, more light hits the solar cells meaning more generation
            which in turn means more money, sooner.
            <br />
            <br /> We offer a complete solar panel cleaning service, including a
            guaranteed 24 hour response time if required. In cases of bird
            dropping strikes, lichen growth, dust clouds due to building works
            or previously unnoticed dirt build up on solar panels, this is a
            useful part of our service which will see your solar panels
            instantly increase their output.
          </Typography>
        </div>

        <div className='md:px-10 lg:px-20'>
          <Typography variant='h5' className='mb-8'>
            2. Inverter Maintenance
          </Typography>

          <div className='hidden lg:flex flex-row flex-wrap gap-8 mb-8'>
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service3.jpeg'
              alt='service3'
            />
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service4.jpeg'
              alt='service4'
            />
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service5.jpeg'
              alt='service5'
            />
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service6.jpeg'
              alt='service6'
            />
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service7.jpeg'
              alt='service7'
            />
            <img
              className='h-72 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service8.jpeg'
              alt='service8'
            />
          </div>

          <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            className='rounded-xl h-80 w-80 lg:hidden mb-8'
          >
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service3.jpeg'
              alt='service3'
            />
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service4.jpeg'
              alt='service4'
            />
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service5.jpeg'
              alt='service5'
            />
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service6.jpeg'
              alt='service6'
            />
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service7.jpeg'
              alt='service7'
            />
            <img
              className='h-80 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service8.jpeg'
              alt='service8'
            />
          </Carousel>

          <Typography
            variant='paragraph'
            className='text-justify text-sm md:text-base'
          >
            Solar Maintenance Solar Solutions provides a complete solar array
            testing, servicing and repair service on commercial rooftop and
            residential solar arrays. We can provide you with any or all of the
            following: <br />
            <br />
          </Typography>
          <div className='flex flex-col md:flex-row justify-start items-start gap-0 md:gap-16 pl-4'>
            <ul className='list-disc'>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Energy production analysis
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  String testing
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Voltage & current check
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  AC/DC connector check
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Inverter testing
                </Typography>
              </li>
            </ul>
            <ul className='list-disc'>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Junction box, isolator, distribution board and wiring
                  inspection
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Visual inspection of entire system for signs of damage
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Test of parameters of system to ensure optimum efficiency
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Roof fixing and roof condition check
                </Typography>
              </li>
              <li>
                <Typography
                  variant='paragraph'
                  className='text-xs md:text-sm lg:text-base'
                >
                  Advice, replacement of faulty parts and repairs, where
                  necessary
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <div className='md:px-10 lg:px-20'>
          <div className='mb-4'>
            <Typography variant='h5' className='mb-8'>
              3. Reporting
            </Typography>
          </div>
          <div className='hidden md:flex flex-row gap-8'>
            <img
              className='h-72 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service9.jpg'
              alt='service9'
            />
            <img
              className='h-72 w-80 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service10.jpeg'
              alt='service10'
            />
          </div>

          <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            className='rounded-xl h-80 w-80 md:hidden mb-8'
          >
            <img
              className='h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service9.jpg'
              alt='service9'
            />
            <img
              className='h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service10.jpeg'
              alt='service10'
            />
          </Carousel>
        </div>

        <div className='md:px-10 lg:px-20'>
          <Typography variant='h5' className='mb-8'>
            4. Plant monitoring and performance
          </Typography>

          <div className='flex flex-row gap-2 mb-8'>
            <img
              className='h-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service11.jpg'
              alt='service11'
            />
          </div>

          <Typography
            variant='paragraph'
            className='text-justify text-sm md:text-base'
          >
            System monitoring is essential for ensuring your solar array is
            running at it’s maximum capacity. Your Return-On-Investment (ROI)
            can be severely dented if you do not know of problems on your array
            straightaway. Without monitoring, you may not be aware of a problem
            on your arrays for weeks or even months.
            <br />
            <br />
            One outage could cost you more than the cost of years’ worth of
            remote monitoring. So ensuring they are running at peak performance
            is essential. Power losses and outages, create downtime and a loss
            of energy and revenue. So, the instead of asking why to have it, we
            would ask, ‘Why would you not want it?’.
            <br />
            <br /> Why wouldn’t you like to keep an eye on the performance of
            your system, be notified the moment something goes wrong and ensure
            you are using the energy created in the most efficient way? Our
            monitoring service will provide you with up-to-date reports, system
            status, including fault detection and instantaneous alerts
          </Typography>
        </div>

        <div className='md:px-10 lg:px-20'>
          <Typography variant='h5' className='mb-8'>
            5. Inverter communication
          </Typography>

          <div className='hidden lg:flex flex-row gap-8 mb-8'>
            <img
              className='h-80 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service12.jpeg'
              alt='service12'
            />
            <img
              className='h-80 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service13.jpeg'
              alt='service13'
            />
            <img
              className='h-80 w-72 rounded-lg object-cover object-bottom shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service14.jpeg'
              alt='service14'
            />
          </div>

          <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            className='rounded-xl h-80 w-80 md:hidden mb-8'
          >
            <img
              className='h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service12.jpeg'
              alt='service12'
            />
            <img
              className='h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service13.jpeg'
              alt='service13'
            />
            <img
              className='h-full w-full rounded-lg object-cover object-bottom shadow-xl shadow-blue-gray-900/50'
              src='./assets/images/service14.jpeg'
              alt='service14'
            />
          </Carousel>

          <Typography
            variant='paragraph'
            className='text-justify text-sm md:text-base'
          >
            <span className='font-semibold'>
              Prevent even minor yield losses:{' '}
            </span>
            Now let’s say you’ve installed a 500 kWp solar PV plant. Also, there
            are strings with 10 solar PV panels connected in series. On a fine
            sunny day, one of the PV panels in one of the strings got damaged
            and stopped producing. Or maybe there is a loose connection in this
            string. If you see the overall picture, you’ll only see a small dip
            in production and you’ll not be able to derive a good reason for
            that mild reduction. It may be because of the weather conditions or
            due to some temporary shadowing etc. Hence, you’ll find no reason to
            go and get the system checked. Because of that, 10 panels in the
            system are now not producing anything and that is a loss of almost
            15 units per day. Having a string monitoring system allows you to
            track the correct reasons for the decline in production and fix them
            as soon as possible.
            <br />
            <br />
            <span className='font-semibold'>
              Precise localization of the problems:{' '}
            </span>
            Another reason why string monitoring is important is to identify the
            exact point of failure in the solar PV system. Consider you have a
            system of 1 MWp capacity and the solar PV panels are installed in a
            huge area. If there is no way to identify exactly which string has
            failed and the production has gone down, it might take days for the
            maintenance team to identify the string and fix it. That means a
            huge cost of maintenance along with a continuous energy loss. Having
            string monitoring system in the plant eliminates both these problems
            and allows the maintenance team to track the correct location of the
            problem and fix it in the minimum time possible.
            <br />
            <br />
            <span className='font-semibold'>Pro-active maintenance: </span>
            There are multiple types of defects and faults that can exist in a
            solar PV panel that are not easily detected by human eyes or before
            making a purchase. These defects cause severe damage to the overall
            system design and energy production. Following are a few defects:
            <br />
          </Typography>
          <ul className='list-decimal px-8 md:px-16 py-4'>
            <li>
              <Typography
                variant='paragraph'
                className='text-justify text-xs md:text-base'
              >
                Microcracks: can happen due to vibrations in the panels or
                mishandling while installation. These are not visible to the
                naked eyes but can cause serious loss of energy production over
                many years.
              </Typography>
            </li>
            <li>
              <Typography
                variant='paragraph'
                className='text-justify text-xs md:text-base'
              >
                PID: Potential Induced Degradation happens in the solar
                crystalline PV panels caused by stray currents and can cause
                efficiency loss of up to 30%. This defect can also take up to
                months to detect.
              </Typography>
            </li>
          </ul>
          <Typography
            variant='paragraph'
            className='text-justify text-xs md:text-base'
          >
            Considering the above points, it is clear that string monitoring is
            an important measure to keep a track of the solar PV system and also
            to identify key issues with the solar PV panels.
          </Typography>
        </div>
      </div>
    </Section>
  );
};

export default Services;
