import React from 'react';
import './main.scss'
import { animateUp } from '../../settings/Animation'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='content home-page'>
      <h3 {...animateUp} data-aos-duration="600">Привет, Я</h3>
      <h1 {...animateUp} data-aos-duration="800">Ибрагимов Рустам</h1>
      <p {...animateUp} data-aos-duration="1000">Я Фронтенд разработчик,специализирующийся на создании адаптивных веб-сайтов.Моя цель создать веб-сайты,которые принесут пользу людям.</p>
      <Link className='btn-link' to='/portfolio' {...animateUp} data-aos-duration="1400" >Портфолио</Link>
    </div>
  )
}
export default Main