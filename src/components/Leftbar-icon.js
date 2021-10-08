import React from 'react';
import { animateRight } from '../App';
import '../css/leftbar.css'

export const LeftbarIcon = () => {
  return (
    <div className='left-and-right-bar left-icon-block'>
      <ul>
        <li {...animateRight} data-aos-duration='1800'><a href='https://www.instagram.com/ibrag1movrustam/'><span className='fab fa-instagram'></span></a></li>
        <li {...animateRight} data-aos-duration='2000'><a href='http://t.me/Ibrag1movrustam'><span className='fab fa-telegram-plane'></span></a></li>
        <li {...animateRight} data-aos-duration='2200'><a href='https://github.com/Ibragimovrustam21/'><span className='fab fa-github'></span></a></li>
        <li {...animateRight} data-aos-duration='2400'><a href='https://www.linkedin.com/in/rustam-ibragimov-08b009216/'><span className='fab fa-linkedin-in'></span></a></li>
      </ul>
      <div className='vertical-line' data-aos="zoom-in" data-aos-duration='2400'/>
    </div>
  );
};

