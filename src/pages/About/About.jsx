import React from 'react';
import './about.scss'
import { animateLeft, animateUp } from '../../Settings/Animation';
import user_img from '../../img/photo_2021-10-18_06-27-00.jpg'
import { Divider } from 'antd';

const About = () => (
  <div className='content about-page'>
    <div className='divider-box'>
      <Divider className='title' orientation="left">
        <h3><span>02.</span>Про меня</h3>
      </Divider>
    </div>
    <div className='about-me'>
      <div className='my-info'>
        <p {...animateUp} data-aos-duration='600'>
          Здравствуйте! Меня зовут Рустам. Мне 21 год. Я начал заниматься программированием в 2020 году.
          В настоящее время я являюсь фронтенд - разработчиком. Я изучал программирование в социальных сетях,
          включая Youtube.com, Udemy.com и PDP IT Academy.
          Одна из моих самых больших целей - стать сильнейшим программистом и создать свой собственный стартап.
        </p>
        <p {...animateUp} data-aos-duration='800'>Мои навыки:</p>
        <ul {...animateUp} data-aos-duration='1000'>
          <li>HTML</li>
          <li>CSS / SASS</li>
          <li>Bootstrap</li>
          <li>Ant Design</li>
          <li>Material UI</li>
          <li>JavaScript (ES6+)</li>
          <li>React js (Redux,Xook)</li>
          <li>Typescript (Basic)</li>
          <li>Git</li>
        </ul>
      </div>
      <div className='my-photo'>
        <img src={user_img} alt='' {...animateLeft} data-aos-duration='800' />
      </div>
    </div>
  </div>
);

export default About