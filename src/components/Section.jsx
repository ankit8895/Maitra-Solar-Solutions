import React from 'react';

const Section = ({ classname, children }) => {
  return (
    <div className={`${classname || 'px-4 py-4 h-screen'}`}>{children}</div>
  );
};

export default Section;
