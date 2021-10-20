import React from 'react';
import '../css/home.css'
import { animateUp } from '../App'
import { Link } from 'react-router-dom';

export const HomePage = () => (
    <div className='content home-page'>
      <h3 {...animateUp} data-aos-duration="600">Привет, Я</h3>
      <h1 {...animateUp} data-aos-duration="800">Ибрагимов Рустам</h1>
      <h2 {...animateUp} data-aos-duration="1000">Я разрабатываю адаптивные веб-сайты</h2>
      <p {...animateUp} data-aos-duration="1200">Я Фронтенд разработчик, специализирующийся на создании адаптивных веб-сайтов.В настоящее время работая над собой.Моя цель создать веб-сайты, которые принесут пользу людям.</p>
      <Link className='btn-link' to='/portfolio'   {...animateUp} data-aos-duration="1400" >Портфолио</Link>
    </div>
  );
