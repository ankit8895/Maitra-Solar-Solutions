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
} from '@material-tailwind/react';

const Contact = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 lg:mt-8 h-[32rem]'>
        <div className='max-h-96 w-full flex flex-col justify-between p-4 gap-4 lg:gap-0'>
          <Typography variant='h5' className='text-center text-2xl md:text-4xl'>
            Ready to go solar?
          </Typography>
          <Typography
            variant='paragraph'
            className='text-center lg:text-start text-[8px] md:text-lg lg:text-2xl'
          >
            By clicking "Get A Free Solar Estimate", I consent to join the email
            list and receive SMS from Maitra Solar solutions, with access to our
            latest offers and services. Message a data rates may apply. Message
            frequency varies. More details on this are in our Privacy Policy and
            Terms of Service.
          </Typography>
          <Typography
            variant='paragraph'
            className='text-center text-[8px] md:text-lg lg:text-2xl'
          >
            Text "HELP" for help or contact us at +91-8446853660.
          </Typography>
        </div>
        <div className='h-full w-full'>
          <Card className='w-full'>
            <CardHeader
              variant='gradient'
              color='gray'
              className='mb-4 grid h-28 place-items-center'
            >
              <Typography variant='h3' color='white'>
                Contact
              </Typography>
            </CardHeader>
            <CardBody className='flex flex-col gap-4'>
              <Input label='Email' size='lg' />
              <Input label='Password' size='lg' />
              <Input label='Subject' size='lg' />
              <Input label='Message' size='md' />
            </CardBody>
            <CardFooter className='pt-0'>
              <Button variant='gradient' fullWidth>
                Get a Free Solar Estimate
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
