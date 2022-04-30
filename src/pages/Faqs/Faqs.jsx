import React from 'react'
import './faqs.scss'
import { animateUp } from '../../Settings/Animation'
import { Divider } from 'antd'

const Faqs = () => (
  <div className='content faqs'>
    <div className='divider-box'>
      <Divider className='title' orientation="left">
        <h3><span>04.</span>Вопросы</h3>
      </Divider>
    </div>
    <div className='questions-block'>
      <div className='questions' {...animateUp} data-aos-duration='600'>
        <h4><span className='far fa-circle' /> Сколько тебе лет?</h4>
        <p>Я родился 21 октября 2000г. Мне сейчась 21 год.</p>
      </div>
      <div className='questions' {...animateUp} data-aos-duration='800'>
        <h4><span className='far fa-circle' /> Откуда ты?</h4>
        <p> Я из города Зарафшана (Наваинская область).</p>
      </div>
      <div className='questions' {...animateUp} data-aos-duration='1000'>
        <h4><span className='far fa-circle' /> Ты учишься или работаешь где-то?</h4>
        <p>Да, я учусь в Ташкентском государственном университете транспорта.</p>
      </div>
      <div className='questions' {...animateUp} data-aos-duration='1200'>
        <h4><span className='far fa-circle' /> Где ты изучал программирование?</h4>
        <p>Я изучал программирование в социальных сетях, включая Youtube.com, Udemy.com и PDP IT Academy.</p>
      </div>
    </div>
  </div>
)
export default Faqs
