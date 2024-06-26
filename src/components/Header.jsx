import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from '@material-tailwind/react';

import { navLinks } from '../constants';

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className='sticky top-0 z-10 h-max w-full font-sans border-b-2 border-white/75'>
      <Navbar className='border-0 h-full navbar'>
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as='a'
            href='/'
            className='cursor-pointer py-1.5 font-medium flex flex-row items-center gap-2'
          >
            <img
              src='./assets/images/logo.png'
              alt='logo'
              width={50}
              height={50}
            />
            <Typography
              variant='h5'
              className='text-sm md:text-xl rounded-md p-2 bg-white/75'
            >
              MAITRA SOLAR SOLUTIONS
            </Typography>
          </Typography>
          <div className='flex items-center gap-8'>
            <div className='mr-4 hidden lg:block'>
              <div className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                {navLinks.map((item, index) => {
                  const isActive = item.href === pathname;
                  return (
                    <Link key={index} to={`${item.href}`}>
                      <Button
                        variant={`${isActive ? 'gradient' : 'text'}`}
                        size='sm'
                        className='hidden lg:inline-block'
                      >
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>

            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
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
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
