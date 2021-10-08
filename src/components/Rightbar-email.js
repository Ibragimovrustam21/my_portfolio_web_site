import React from 'react';
import { animateLeft } from '../App';
import '../css/rightbar.css'

export const RightbarEmail = () => {
  return (
    <div className='left-and-right-bar right-email-block' {...animateLeft} data-aos-duration='1800'>
      <div className='email-name hoverLink'>
        <a href='https://e.mail.ru/inbox/?back=1' >
          ibrag1movrustam@gmail.com
        </a>
      </div>
      <div className='vertical-line'  data-aos="zoom-in" data-aos-duration='2400'/>
    </div>
  );
};
