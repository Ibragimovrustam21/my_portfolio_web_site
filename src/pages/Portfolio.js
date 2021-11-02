import React from 'react';
import '../css/portfolio.css'
import { ProjectItem } from '../components/ProjectItem';

export const Portfolio = () => (
  <div className='portfolio content' >
    <div className='title'>
      <h3><span>03.</span>Портфолио</h3>
      <div className='horizontal-line' />
    </div>
    <div className='my-projects'>
      <ProjectItem
        title='Olmo.uz - Software, App, Start up web site (clone)'
        text='Этот сайт сделано во время стажировки.'
        adaptive={'Сайт в адаптивным состояние.'}
        technologies={['React', 'Material ui']}
        url={'https://olmointernship.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/olmo'}
        animeTime={'800'}
      />
      <ProjectItem
        title='Rizon.uz'
        text=' Первая компания в Узбекистане, которая производит широкий спектр коллоидных минералов на основе нанотехнологий.'
        adaptive={'Сайт не адаптивным состояние.'}
        technologies={['React', 'Material ui']}
        url={'https://rizon.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/RizonUz/tree/rizon'}
        animeTime={'1000'}
      />
      <ProjectItem
        title='Weather react project'
        text=' Это приложение предоставляет национальный и местный прогноз погоды для городов.'
        technologies={['React', 'Bootstrap',]}
        url={'https://obhavoweather.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/Weather_App_React/tree/weather'}
        animeTime={'1200'}
      />
      <ProjectItem
        title='Todo App(Typescript)'
        text='Это простое приложение, которое вы можете создаст `todo`.'
        adaptive={'Приложение в адаптивным состояние.'}
        technologies={['React', 'Materialize']}
        url={'https://todoappts.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/todo_app_typescript/tree/todo'}
        animeTime={'1400'}
      />
      <ProjectItem
        title='QRCode | React App'
        text='Это простое приложение, которое представит вам `QRCode`.'
        adaptive={'Приложение в адаптивным состояние.'}
        technologies={['React', 'Bootstrap']}
        url={'https://qrcode-21.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/QRCode/tree/qrcode'}
        animeTime={'1600'}
      />
    </div>
  </div>
);
