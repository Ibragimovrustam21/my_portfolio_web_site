import React from 'react';
import { animateLeft } from '../../Settings/Animation';
import './rightbar.scss'

const Rightbar = () => (
  <div className='left-and-right-bar right-email-block' >
    <div className='email-name hoverLink' {...animateLeft} data-aos-duration='1800'>
      <a href='https://e.mail.ru/inbox/?back=1' >
        ibrag1movrustam@mail.ru
      </a>
    </div>
    <div className='vertical-line' data-aos="zoom-in" data-aos-duration='2400' />
  </div>
);

export default Rightbar