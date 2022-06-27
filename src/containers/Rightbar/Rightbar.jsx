import React from 'react';
import { animateLeft } from '../../settings/Animation';
import './rightbar.scss'

const Rightbar = () => (
  <div className='left-and-right-bar right-email-block' >
    <div className='email-name hoverLink' {...animateLeft} data-aos-duration='1800'>
      <a href='https://e.mail.ru/inbox/?back=1' target='_blank' rel="noreferrer" >
        ibrag1movrustam@mail.ru
      </a>
    </div>
    <div className='vertical-line' data-aos="zoom-in" data-aos-duration='2400' />
  </div>
);

export default Rightbar