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
        title='Olmo.uz - Software, App, Start up web site (clone) | React'
        text='Этот сайт сделано во время стажировки.'
        adaptive={'Сайт в адаптивным состояние.'}
        technologies={['React', 'Material ui']}
        url={'https://olmointernship.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/olmo'}
        animeTime={'800'}
      />
      <ProjectItem
        title='Online Shopping | React (Redux toolkit)'
        text='С помощи этого сайта вы можете купить качественные товары не выходя из дома.'
        adaptive={'Сайт в адаптивным состояние.'}
        technologies={['React', 'Bootstrap']}
        url={'https://e-commerce-21.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/e-commerce/tree/master '}
        animeTime={'1000'}
      />
      <ProjectItem
        title='Rizon.uz | React'
        text=' Первая компания в Узбекистане, которая производит широкий спектр коллоидных минералов на основе нанотехнологий.'
        adaptive={'Сайт не адаптивным состояние.'}
        technologies={['React', 'Material ui']}
        url={'https://rizon.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/RizonUz/tree/rizon'}
        animeTime={'1200'}
      />
      <ProjectItem
        title='Weather react project | React'
        text=' Это приложение предоставляет национальный и местный прогноз погоды для городов.'
        adaptive={'Приложение в адаптивным состояние.'}
        technologies={['React', 'Bootstrap',]}
        url={'https://obhavoweather.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/Weather_App_React/tree/weather'}
        // animeTime={'1400'}
      />
      <ProjectItem
        title='Todo App | Typescript'
        text='Это простое приложение, которое вы можете создать todo.'
        adaptive={'Приложение в адаптивным состояние.'}
        technologies={['React', 'Materialize']}
        url={'https://todoappts.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/todo_app_typescript/tree/todo'}
        // animeTime={'1600'}

      />
      <ProjectItem
        title='QRCode | React'
        text='Это простое приложение, которое представит вам QRCode.'
        adaptive={'Приложение в адаптивным состояние.'}
        technologies={['React', 'Bootstrap']}
        url={'https://qrcode-21.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/QRCode/tree/qrcode'}
        // animeTime={'1800'}

      />
      <ProjectItem
        title='You Tube Clone version | React'
        text='Этот клон сайта youtube.com.'
        adaptive={'Приложение в адаптивным состояние.'}
        technologies={['React', 'Bootstrap']}
        url={'https://youtubeclone-21.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/you_tube_clone/tree/youtube'}
        // animeTime={'2000'}

      />
      <ProjectItem
        title='Cryptocurrency Finance Price | React'
        text='Это простое приложение, которое представит вам Cryptocurrency Finance Price.'
        adaptive={'Приложение не адаптивным состояние.'}
        technologies={['React', 'Bootstrap']}
        url={'https://cryptocurrency-21.netlify.app/'}
        urlGithub={'https://github.com/Ibragimovrustam21/Cryptocurrency-Finance-Price/tree/crypto'}
        // animeTime={'2200'}
      />
    </div>
  </div>
);
