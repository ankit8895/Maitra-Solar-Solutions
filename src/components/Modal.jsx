import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';

const Modal = ({ children, Modalfor }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        className='bg-transparent border-0 shadow-none hover:shadow-none p-0'
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          {Modalfor === 'whatsapp'
            ? 'Scan the OR Code'
            : Modalfor === 'telephone'
            ? 'Send Message'
            : 'Click to Connect'}
        </DialogHeader>
        <DialogBody className='flex justify-center items-center'>
          {Modalfor === 'whatsapp' ? (
            <img
              src='./assets/images/QRCode.jpg'
              alt='whatsapp-QR'
              className='w-1/2 h-1/2'
            />
          ) : Modalfor === 'telephone' ? (
            <Typography
              variant='paragraph'
              className='font-semibold text-xs md:text-base'
            >
              Text "HELP" for help or contact us at +91-8446853660
            </Typography>
          ) : (
            <a
              href='https://in.linkedin.com/in/maitra-solar-solutions'
              target='_blank'
              className='underline underline-offset-8 font-semibold text-sm md:text-base'
            >
              https://in.linkedin.com/in/maitra-solar-solutions
            </a>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Modal;
