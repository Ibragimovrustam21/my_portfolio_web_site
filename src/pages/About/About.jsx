import React from 'react';
import './about.scss'
import { animateUp } from '../../settings/Animation';
import my_photo from '../../img/i am.jpg'
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
          Меня зовут Рустам.В настоящее время я являюсь фронтенд разработчиком.Я изучал программирование в социальных сетях,
          включая Youtube.com, Udemy.com и PDP IT Academy.Одна из моих самых больших целей - стать сильнейшим программистом и создать свой собственный стартап.
        </p>
        <p {...animateUp} data-aos-duration='800'>Мои навыки:</p>
        <ul {...animateUp} data-aos-duration='1000'>
          <li>HTML5</li>
          <li>CSS3 / SASS</li>
          <li>Bootstrap</li>
          <li>Ant Design</li>
          <li>Material UI</li>
          <li>Javascript (ES6+)</li>
          <li>React js (Redux,Xook)</li>
          <li>Typescript (Basic)</li>
          <li>Git</li>
        </ul>
      </div>
      <div className='my-photo'>
        <img src={my_photo} alt='' />
      </div>
    </div>
  </div>
);

export default About