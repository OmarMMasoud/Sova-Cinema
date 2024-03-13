import React, { useState } from 'react'
import "../style/nav.scss"
import logo from"../style/imgs/logo.png"
import { MdLocationPin} from "react-icons/md"
import { RiMenu3Fill } from "react-icons/ri"
import { SlClose } from "react-icons/sl"
import { useLocation } from 'react-router-dom'

function Nav() {
  const [navIsVisible, setNavIsVisible] = useState(false)
  const location = useLocation()

  const handleNavClick = () => {
    setNavIsVisible(!navIsVisible)
    if (!navIsVisible) {
      window.scrollTo(0, 0)
    }
  }

  return (
    <nav className={`nav ${navIsVisible ? 'nav--show-mobile' : 'nav--hide-mobile'}`}>
      <div className="logo">
       <a href="/"> <img src={logo} alt="sova logo" /></a>
      </div>
      <a className="location">
        <MdLocationPin /> Нижний Новгород
      </a>
      <button className="hamburger-menu" onClick={handleNavClick}>
        {navIsVisible ? <SlClose /> : <RiMenu3Fill />}
      </button>
      <ul className={`navList ${navIsVisible ? 'navList--visible' : ''}`}>
        <img className='showLogo' src={logo} alt="" />

        <li className="navItem"><a href={location.pathname === '/' ? "#section1" : "/#section1"}>ГЛАВНАЯ</a></li>
        <li className="navItem"><a href={location.pathname === '/' ? "#section5" : "/#section5"}>УСЛУГИ</a></li>
        <li className="navItem"><a href={location.pathname === '/' ? "#section6" : "/#section"}>КОНТАКТЫ</a></li>
        

      </ul>
    </nav>
  )
}

export default Nav