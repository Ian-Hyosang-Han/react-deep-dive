import React from 'react';

const Header = () => {

    const today = new Date();
    const months = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
      ];
    const createdDate = `${months[today.getMonth()]} / ${today.getDate()} / ${today.getFullYear()}`;

  return (
    <div className='flex justify-between items-center w-full h-53px border-b-2 border-b-[#e3e5e8] mb-[50px]'>
        <h1 className="font-gangwon flex items-center gap-2 text-[30px] whitespace-nowrap">
            TODO LIST
            <img src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" 
                 className='w-10 h-10 animate-[bounce_0.6s_cubic-bezier(0.95,0.05,0.61,0.32)_5_alternate]'
                 alt="cool emoji" />
        </h1>
        <h2 className='font-gangwon text-[23px]'>{createdDate}</h2>
    </div>
  )
};

export default Header;
