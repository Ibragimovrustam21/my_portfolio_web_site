import React from 'react'
import '../css/faqs.css'
import { animateUp } from '../App'

export const Faqs = () => (
  <div className='content faqs'>
    <div className='title'>
      <h3><span>04.</span>Вопросы</h3>
      <div className='horizontal-line' />
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
        <h4><span className='far fa-circle' /> Ты учишься или работаешь где-нибудь?</h4>
        <p>Да, я учусь в Ташкентском государственном университете транспорта.</p>
      </div>
      <div className='questions' {...animateUp} data-aos-duration='1200'>
        <h4><span className='far fa-circle' /> Где вы изучили программирование?</h4>
        <p>Я изучал программирование в социальных сетях, включая Youtube.com, Udemy.com и PDP IT Academy.</p>
      </div>
    </div>
  </div>
)
