import React from 'react';
import { ProjectItem } from '../components/ProjectItem';
import '../css/portfolio.css'

export const Portfolio = () => {
  return (
    <div className='portfolio content' >
      <div className='title'>
        <h3><span>03.</span>Портфолио</h3>
        <div className='horizontal-line' />
      </div>
      <div className='my-projects'>
        <ProjectItem
          title='Olmo.uz - Software, App, Start up web site (clone)'
          text='Этот сайт сделано во время стажировки.Сайт не адаптивным состояние.'
          technologies={['Material ui','React']}
          url={'https://olmointernship.netlify.app/'}
          urlGithub={'https://github.com/Ibragimovrustam21/olmo'}
          animeTime={'800'}
        />
        <ProjectItem
          title='Rizon.uz'
          text=' Первая компания в Узбекистане, которая производит широкий спектр коллоидных минералов на основе нанотехнологий.Сайт не адаптивным состояние.'
          technologies={['Material ui','React' ]}
          url={'https://rizon.netlify.app/'}
          urlGithub={'https://github.com/Ibragimovrustam21/RizonUz/tree/rizon'}
          animeTime={'1000'}
        />
        <ProjectItem
          title='Weather react project'
          text=' Это приложение предоставляет национальный и местный прогноз погоды для городов.'
          technologies={['Bootstrap', 'React']}
          url={'https://obhavoweather.netlify.app/'}
          urlGithub={'https://github.com/Ibragimovrustam21/Weather_App_React/tree/weather'}
          animeTime={'1200'}
        />
      </div>
    </div>
  );
};
