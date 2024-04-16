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

const Contact = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-32 lg:gap-4 lg:mt-4 h-[32rem]'>
        <div className='flex flex-col items-center lg:items-start justify-evenly px-2 md:px-6 lg:pl-6 gap-4 text-justify'>
          <Typography variant='h5' className=' text-2xl md:text-4xl'>
            Ready to go solar?
          </Typography>
          <Typography
            variant='paragraph'
            className='text-justify text-lg lg:mt-14'
          >
            By clicking "Get A Free Solar Estimate", I consent to join the email
            list and receive SMS from Maitra Solar solutions, with access to our
            latest offers and services. Message a data rates may apply. Message
            frequency varies. More details on this are in our{' '}
            <span className='underline decoration-2 cursor-pointer'>
              Privacy Policy
            </span>{' '}
            and{' '}
            <span className='underline decoration-2 cursor-pointer'>
              Terms of Service
            </span>
            .
          </Typography>
          <Typography variant='paragraph' className='text-lg'>
            Text "HELP" for help or contact us at +91-8446853660.
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
