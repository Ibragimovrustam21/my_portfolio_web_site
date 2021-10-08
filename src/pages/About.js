import React from 'react';
import { animateUp } from '../App';
import '../css/about.css'

export const About = () => {
  return (
    <div className='content about-page'>
      <div className='title'>
        <h3><span>02.</span>Про меня</h3>
        <div className='horizontal-line' />
      </div>
      <div className='about-me'>
        <div className='my-info'>
          <p {...animateUp} data-aos-duration='600'>
            Здравствуйте! Меня зовут Рустам. Мне 21 год. Я начал заниматься программированием в 2020 году.
            В настоящее время я являюсь фронтенд - разработчиком. Я изучал программирование в социальных сетях,
            включая Youtube.com, Udemy.com и PDP IT Academy.
            Одна из моих самых больших целей - стать сильнейшим программистом и создать свой собственный стартап.
          </p>
          <p {...animateUp} data-aos-duration='800'>Мои скилы:</p>
          <ul >
            <li {...animateUp} data-aos-duration='1000'>HTML</li>
            <li {...animateUp} data-aos-duration='1200'>CSS / SASS</li>
            <li {...animateUp} data-aos-duration='1400'>Bootstrap</li>
            <li {...animateUp} data-aos-duration='1600'>Material ui</li>
            <li {...animateUp} data-aos-duration='1800'>Git</li>
            <li {...animateUp} data-aos-duration='2000'>JavaScript (ES6+)</li>
            <li {...animateUp} data-aos-duration='2200'>Jquery</li>
            <li {...animateUp} data-aos-duration='2400' >React js (Redux,Xook)</li>
            <li {...animateUp} data-aos-duration='2600'>Next js</li>
          </ul>
        </div>
        <div className='my-photo'></div>
      </div>
    </div>
  );
};
