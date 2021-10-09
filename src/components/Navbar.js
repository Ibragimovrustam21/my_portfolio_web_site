import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { animateDown } from '../App'
import '../css/navbar.css'
import logo from '../logo/LogoMakr-2dsx6X.png'

const Navbar = ({ history }) => {
  const [path] = useState('')

  window.addEventListener('scroll', function () {
    let head = document.querySelector('header')
    head.classList.toggle('sticky', window.scrollY > 0)
  })


  const navActive = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-menu-group");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-active");
  }


  return (
    <header className={path}>
      <div className='navbar'>
        <div className='navbar-logo-brand'>
          <Link to='/'>
            <img alt='' src={logo} />
          </Link>
        </div>
        <div className='navbar-menu-group'>
          <div className='navbar-menu-item'>
            <div>
              <h4 className='hoverLink' onClick={navActive} {...animateDown} data-aos-duration="600">
                <Link to='/' ><span>01.</span> Главный</Link>
              </h4>
            </div>
            <div>
              <h4 className='hoverLink' onClick={navActive} {...animateDown}  data-aos-duration="800">
                <Link to='/about' ><span>02.</span> Про меня</Link>
              </h4>
            </div>
            <div>
              <h4 className='hoverLink' onClick={navActive} {...animateDown} data-aos-duration="1000">
                <Link to='/portfolio' className=''><span>03.</span> Портфолио</Link>
              </h4>
            </div>
            <div>
              <h4 className='hoverLink' onClick={navActive} {...animateDown} data-aos-duration="1200">
                <Link to='/faqs' ><span>04.</span> Вопросы</Link>
              </h4>
            </div>
          </div>
          <a href='https://ibrag1movresume.netlify.app/' className='btn-link' {...animateDown} data-aos-duration="1400" >Резюме</a>
        </div>
        <div className="hamburger" onClick={navActive}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </header >
  )
}
export default Navbar