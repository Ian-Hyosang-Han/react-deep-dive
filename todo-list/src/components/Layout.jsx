import React from 'react';

const Layout = (props) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='
        max-w-[var(--default-max-width)] 
        min-w-[var(--default-min-width)] 
        mx-auto flex-1'
      >
        {props.children}
        </div>
    </div>
  )
};

export default Layout;
