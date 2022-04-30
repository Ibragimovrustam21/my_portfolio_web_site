import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/LogoMakr-2dsx6X.png'
import './navbar.scss'

const Navbar = () => {
  const [path] = useState('')

  window.addEventListener('scroll', function () {
    let head = document.querySelector('.navbar')
    head.classList.toggle('sticky', window.scrollY > 0)
  })

  const navActive = () => {
    if (window.innerWidth < 990) {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".navbar-menu-group");
      const blurback = document.querySelector('.blur-background')

      blurback.classList.toggle("blur-back-show")
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("nav-active");
    }
  }
  return (
    <>
      <div className='blur-background'></div>
      <header className={path}>
        <div className='navbar'>
          <div className='navbar-logo-brand'>
            <Link to='/'>
              <img alt='' src={logo} />
            </Link>
          </div>
          <div className='navbar-menu-group'>
            <div className='navbar-menu-item'>
              <h4 className='hoverLink'>
                <Link to='/' onClick={navActive}><span>01.</span> Главный</Link>
              </h4>
              <h4 className='hoverLink'>
                <Link to='/about' onClick={navActive} ><span>02.</span> Про меня</Link>
              </h4>
              <h4 className='hoverLink'>
                <Link to='/portfolio' onClick={navActive}><span>03.</span> Портфолио</Link>
              </h4>
              <h4 className='hoverLink' >
                <Link to='/faqs' onClick={navActive}><span>04.</span> Вопросы</Link>
              </h4>
            </div>
            <a href='https://ibrag1movresume.netlify.app/' className='btn-link'>Резюме</a>
          </div>
          <div className="hamburger" onClick={navActive}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </header >
    </>
  )
}
export default Navbar