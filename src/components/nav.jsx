//add location icon ///////////////////////////////////////////
//add nav  icon ///////////////////////////////////////////
import React, { useState } from 'react'
import "../style/nav.scss"
import logo from"../style/imgs/logo.png"

function Nav(){
  const [navIsVisible, setNavIsVisible] = useState(false)

  return (
<nav className={`nav ${navIsVisible ? 'nav--show-mobile' : ''}`}>      <button className='location'> Нижний Новгород</button>
      <button className='hamburger-menu' onClick={() => setNavIsVisible(!navIsVisible)}><span>• • •</span></button>
      <ul className='navList' style={{ display: navIsVisible ? 'flex' : 'none' }}>
        <li className='navItem'>ГЛАВНАЯ</li>
        <li className='navItem'>УСЛУГИ</li>
        <li className='navItem'>КОНТАКТЫ</li>
      </ul>
    </nav>
  )
}

export default Nav
