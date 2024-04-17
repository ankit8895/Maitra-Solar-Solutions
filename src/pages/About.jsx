import React from 'react';
import Section from '../components/Section';
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
} from '@material-tailwind/react';

const About = () => {
  return (
    <Section>
      <div className='flex flex-col md:items-center lg:flex-row gap-4 p-2 md:p-4'>
        <Card className='w-full md:w-3/5'>
          <CardHeader floated={false} className='h-80 bg-[#a1b1c7] relative'>
            <img
              src='./assets/images/about.png'
              alt='profile-picture'
              className='bg-[#a1b1c7] absolute md:right-28'
            />
          </CardHeader>
          <CardBody className='text-center'>
            <Typography variant='h4' color='blue-gray' className='mb-2'>
              PRAJAKTA KULKARNI
            </Typography>
            <Typography color='blue-gray' className='font-medium' textGradient>
              Managing Director
            </Typography>
          </CardBody>
        </Card>
        <div className='grid grid-cols-1 gap-4 h-[28rem] w-full'>
          <Typography
            variant='paragraph'
            className='text-md md:text-lg text-justify'
          >
            Maitra Solar Solutions provides comprehensive Asset management,
            Operations and Maintenance (O&M) services for Solar PV plants. Our
            programs, practices and procedures are focused on enhancing plant
            performance, reliability, safety, commercial optimization and
            regulatory compliance. We are confident you will find the offerings
            truly unique to make your PV asset operate safer, more efficient and
            more reliable.
            <br />
            <br />
            Solar Energy has an infinite potential. With solar plants operating
            across India, We are delivering affordable clean energy solutions
            tailored to the unique needs of residential & commercial users,
            utility companies, power trading companies and industrial
            corporations.
          </Typography>
          <Typography variant='h5' className='text-center'>
            "अशक्यं प्रकृतः ऋते जीवनम"
          </Typography>
          <Typography
            variant='h5'
            className='text-center uppercase text-lg md:text-xl'
          >
            There is no life without nature.
          </Typography>
        </div>
      </div>
    </Section>
  );
};

export default About;
