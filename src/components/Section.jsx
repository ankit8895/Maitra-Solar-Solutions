import { Typography } from '@material-tailwind/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Section = ({ classname, children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === '/' && (
        <Typography
          variant='h1'
          className='bg-white/75 text-center text-xs md:text-base font-extrabold tracking-wide md:tracking-widest font-sans'
        >
          Country’s first ever wet robotic cleaning technology
        </Typography>
      )}
      <div
        className={`${classname || 'px-4 py-4 h-screen font-sans relative'}`}
      >
        {children}
      </div>
    </>
  );
};

export default Section;
