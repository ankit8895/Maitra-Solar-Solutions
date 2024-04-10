import React from 'react';
import Section from '../components/Section';
import { Typography } from '@material-tailwind/react';

import aboutImage from '../assets/images/about.jpg';

const About = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <figure className='relative h-[32rem] w-full'>
          <img
            className='h-full w-full rounded-xl object-cover object-top'
            src={aboutImage}
            alt='profile'
          />
          <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
            <div>
              <Typography variant='h5' color='blue-gray'>
                PRAJAKTA KULKARNI
              </Typography>
              <Typography color='gray' className='mt-2 font-normal'>
                MANAGING DIRECTOR
              </Typography>
            </div>
          </figcaption>
        </figure>
        <div className='grid grid-cols-1 gap-4 h-[32rem] w-full'>
          <Typography variant='lead' className=''>
            Maitra Solar Solutions provides comprehensive Asset management,
            Operations and Maintenance (O&M) services for Solar PV plants. Our
            programs, practices and procedures are focused on enhancing plant
            performance, reliability, safety, commercial optimization and
            regulatory compliance. We are confident you will find the offerings
            truly unique to make your PV asset operate safer, more efficient and
            more reliable. Solar Energy has an infinite potential. With solar
            plants operating across India, We are delivering affordable clean
            energy solutions tailored to the unique needs of residential &
            commercial users, utility companies, power trading companies and
            industrial corporations.
          </Typography>
          <Typography variant='h5' className='text-center'>
            "अशक्यं प्रकृतः ऋते जीवनम ्"
          </Typography>
          <Typography variant='h5' className='text-center uppercase'>
            There is no life without nature.
          </Typography>
        </div>
      </div>
    </Section>
  );
};

export default About;
