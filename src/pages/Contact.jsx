import React from 'react';
import Section from '../components/Section';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Textarea,
  Checkbox,
} from '@material-tailwind/react';

import Modal from '../components/Modal';

const Contact = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-4 lg:mt-4 h-[32rem]'>
        <div className='flex flex-col items-start justify-evenly px-2 md:px-6 lg:pl-6'>
          <Typography variant='h5' className=' text-2xl md:text-4xl'>
            Ready to go solar?
          </Typography>
          <Typography
            variant='paragraph'
            className='text-xs md:text-lg lg:text-base text-justify mt-4'
          >
            By clicking "Get A Free Solar Estimate", I consent to join the email
            list and receive SMS from Maitra Solar solutions, with access to our
            latest offers and services. Message a data rates may apply. Message
            frequency varies. More details on this are in our{' '}
            <span className='underline underline-offset-4 font-semibold cursor-pointer'>
              Privacy Policy
            </span>{' '}
            and{' '}
            <span className='underline underline-offset-4 font-semibold cursor-pointer'>
              Terms of Service
            </span>
            .
          </Typography>
          <Typography as='div'>
            <Typography as='div' className='flex flex-row gap-4 my-4 lg:mb-4'>
              <Modal Modalfor='whatsapp'>
                <img
                  src='./assets/images/whatsapp.png'
                  alt='whatsapp'
                  className='h-6 md:h-10'
                />
              </Modal>
              <Modal>
                <img
                  src='./assets/images/linkedin.png'
                  alt='linkedin'
                  className='h-6 md:h-10'
                />
              </Modal>
              <Modal Modalfor='telephone'>
                <img
                  src='./assets/images/telephone.png'
                  alt='telephone'
                  className='h-6 md:h-10'
                />
              </Modal>
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs md:text-lg lg:text-base'
            >
              Based in Pune, Maharashtra
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs md:text-lg lg:text-base'
            >
              Email:{' '}
              <span className='underline underline-offset-4 font-semibold cursor-pointer'>
                info@maitrasolarsolutions.in
              </span>
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs md:text-lg lg:text-base'
            >
              To join our team, contact us at{' '}
              <span className='underline underline-offset-4 font-semibold cursor-pointer'>
                hr@maitrasolarsolutions.in
              </span>
            </Typography>
          </Typography>
        </div>

        <div className='flex justify-center items-center'>
          <Card className='md:w-96'>
            <CardHeader
              variant='gradient'
              color='gray'
              className='grid h-28 place-items-center'
            >
              <Typography variant='h3' color='white'>
                Contact
              </Typography>
            </CardHeader>
            <CardBody className='flex flex-col gap-2'>
              <Input label='Name' size='lg' />
              <Input label='Email' size='lg' />
              <Input label='Subject' size='lg' />
              <Textarea label='Message' />
              <div className='-ml-2.5'>
                <Checkbox label='Terms of Service and Privacy Policy' />
              </div>
              <Button variant='gradient' fullWidth>
                Get a Free Solar Estimate
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
