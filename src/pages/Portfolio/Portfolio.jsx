import React from 'react';
import './portfolio.scss'
import { Divider } from 'antd';
import MyProject from '../../components/MyProject';

const Portfolio = () => {
  const project = [
    {
      title: 'Olmo.uz - Software, App, Start up web site (clone) | React',
      text: 'Этот сайт сделано во время стажировки.',
      adaptive: 'Сайт в адаптивным состояние.',
      technologies: ['React', 'Material ui'],
      url: 'https://olmo.netlify.app/',
      urlGithub: 'https://github.com/Ibragimovrustam21/olmo',
      animeTime: '800'
    },
    {
      title: 'Online Shopping | React (Redux toolkit)',
      text: 'С помощи этого сайта вы можете купить качественные товары не выходя из дома.',
      adaptive: 'Сайт в адаптивным состояние.',
      technologies: ['React', 'Bootstrap'],
      url: 'https://e-commerce-21.netlify.app/',
      urlGithub: 'https://github.com/Ibragimovrustam21/e-commerce/tree/master ',
      animeTime: '1000'
    },
    {
      title: 'Weather react project | React',
      text: ' Это приложение предоставляет национальный и местный прогноз погоды для городов.',
      adaptive: 'Приложение в адаптивным состояние.',
      technologies: ['React', 'Bootstrap',],
      url: 'https://obhavoweather.netlify.app/',
      urlGithub: 'https://github.com/Ibragimovrustam21/Weather_App_React/tree/weather',
      animeTime: '1200'
    },
    {
      title: 'Todo App | Typescript',
      text: 'Это простое приложение, которое вы можете создать todo.',
      adaptive: 'Приложение в адаптивным состояние.',
      technologies: ['React', 'Materialize'],
      url: 'https://todoappts.netlify.app/',
      urlGithub: 'https://github.com/Ibragimovrustam21/todo_app_typescript/tree/todo',
      // animeTime:'1600'
    },
    {
      title: 'QRCode | React',
      text: 'Это простое приложение, которое представит вам QRCode.',
      adaptive: 'Приложение в адаптивным состояние.',
      technologies: ['React', 'Bootstrap'],
      url: 'https://qrcode-21.netlify.app/',
      urlGithub: 'https://github.com/Ibragimovrustam21/QRCode/tree/qrcode',
      // animeTime:'1800'
    },
    {
      title: 'You Tube Clone version | React',
      text: 'Этот клон сайта youtube.com.',
      adaptive: 'Приложение в адаптивным состояние.',
      technologies: ['React', 'Bootstrap'],
      url: 'https://youtubeclone-21.netlify.app/',
      urlGithub: 'https://github.com/Ibragimovrustam21/you_tube_clone/tree/youtube',
      // animeTime:'2000'
    },
    {
      title: 'Cryptocurrency Finance Price | React',
      text: 'Это простое приложение, которое представит вам Cryptocurrency Finance Price.',
      adaptive: 'Приложение не адаптивным состояние.',
      technologies: ['React', 'Bootstrap'],
      url: 'https://cryptocurrency-21.netlify.app/',
      urlGithub: 'https://github.com/Ibragimovrustam21/Cryptocurrency-Finance-Price/tree/crypto',
      // animeTime:'2200'
    }
  ]
  return (
    <div className='portfolio content' >
      <div className='divider-box'>
        <Divider className='title' orientation="left">
          <h3><span>03.</span>Портфолио</h3>
        </Divider>
      </div>
      <div className='my-projects'>
        {
          project.map((item, key) => {
            const { title, text, adaptive, technologies, url, urlGithub, animeTime } = item
            return (
              <MyProject
                key={key}
                title={title}
                text={text}
                adaptive={adaptive}
                technologies={technologies}
                url={url}
                urlGithub={urlGithub}
                animeTime={animeTime}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio