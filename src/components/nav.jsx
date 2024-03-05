//add location icon ///////////////////////////////////////////
//add nav  icon ///////////////////////////////////////////
import React, { useState } from 'react'
import "../style/nav.scss"
import logo from"../style/imgs/logo.png"
import { MdLocationPin} from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { SlClose } from "react-icons/sl";

function Nav() {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const handleNavClick = () => {
    setNavIsVisible(!navIsVisible);
    if (!navIsVisible) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`nav ${navIsVisible ? 'nav--show-mobile' : 'nav--hide-mobile'}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <a className="location">
        <MdLocationPin /> Нижний Новгород
      </a>
      {!navIsVisible ? (
        <button className="hamburger-menu" onClick={handleNavClick}>
          <RiMenu3Fill />
        </button>
      ) : (
        <button className="hamburger-menu" onClick={handleNavClick}>
          <SlClose />
        </button>
      )}
      <ul className={`navList ${navIsVisible ? 'navList--visible' : ''}`}>
        <img className='showLogo' src={logo} alt="" />

        <li className="navItem"><a href="#section1">ГЛАВНАЯ</a></li>
        <li className="navItem"><a href="#section5">УСЛУГИ</a></li>
        <li className="navItem"><a href="#section6">КОНТАКТЫ</a></li>
      </ul>
    </nav>
  );
}

export default Nav;