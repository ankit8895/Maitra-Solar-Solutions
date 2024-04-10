import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  // Card,
  Collapse,
} from '@material-tailwind/react';

import { navLinks } from '../constants';
import Cross from '../assets/svg/Cross';
import Humburger from '../assets/svg/Humburger';

import logo from '../assets/images/logo.png';

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4'>
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as='a'
            href='/'
            className='mr-4 cursor-pointer py-1.5 font-medium'
          >
            MAITRA SOLAR SOLUTIONS
          </Typography>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block'>
              <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                {navLinks.map((item, index) => (
                  <Typography
                    key={index}
                    as='li'
                    variant='small'
                    color='blue-gray'
                    className='p-1 font-normal'
                  >
                    <Link to={`${item.href}`}>{item.label}</Link>
                  </Typography>
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-x-1'>
              <Link to='/contact'>
                <Button
                  variant='gradient'
                  size='sm'
                  className='hidden lg:inline-block'
                >
                  <span>Contact</span>
                </Button>
              </Link>
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <Cross /> : <Humburger />}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            {navLinks.map((item, index) => (
              <Typography
                key={index}
                as='li'
                variant='small'
                color='blue-gray'
                className='p-1 font-normal'
              >
                <Link to={`${item.href}`}>{item.label}</Link>
              </Typography>
            ))}
          </ul>
          <div className='flex items-center gap-x-1'>
            <Button fullWidth variant='gradient' size='sm' className=''>
              <span>Contact</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
