import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import '../../style/main.scss';
import '../../style/sectionsStyle/section5.scss';

import FirstPackage from '../../style/imgs/packages/firstPackage.png';
import SecondPackage from '../../style/imgs/packages/secondPackage.png';
import ThirdPackage from '../../style/imgs/packages/thirdPackage.png';
import FourthPackage from '../../style/imgs/packages/forthPackage.png';

function Section5(props) {
  const btnRef = React.useRef(null);
  const [selectedChoice, setSelectedChoice] = useState("");

  const leftClick = () => {
    btnRef.current.style.left = '0px';
    btnRef.current.style.width = '105px';
    btnRef.current.style.transform = 'translateX(0)';

  };

  const rightClick = () => {
    btnRef.current.style.left = '120px';
    btnRef.current.style.width = '125px';
    btnRef.current.style.transform = 'translateX(-20px)';
  };

  const [selectedOption, setSelectedOption] = useState(0);

  const toggleDisplayMode = () => {
    setSelectedOption((prevOption) => (prevOption === 0 ? 1 : 0));
  };

  return (
    <section id="section5" className="section5">
      <div className="switchPackages" onClick={toggleDisplayMode}>
        <span id="btn" ref={btnRef}></span>
        <button onClick={leftClick} className={`${selectedOption === 1 ? 'selected' : ''}`}>
          ДВОИХ
        </button>
        <button onClick={rightClick} className={`switchOption ${selectedOption === 0 ? 'selected' : ''}`}>
          КОМПАНИЙ
        </button>
      </div>
      <div className="card coupleCards" style={{ display: selectedOption === 0 ? 'flex' : 'none' }}>
        <div className="card CoupleCard">
          <h3 className="fc">РОМАНТИК</h3>
          <img src={FirstPackage} alt="романтический пакет" />
          <div className="order">
            <div className="price">
              <h4>3900 ₽</h4>
            </div>
            <a value="РОМАНТИК" href="/booking" className="buy-button">
              <h4  className="orderBtn">ЗАКАЗАТЬ</h4>
            </a>
          </div>
        </div>
        <div className="card CoupleCard">
          <h3 className="sc">БЕЗУМНЫЙ ВЕЧЕР</h3>
          <img src={SecondPackage} alt="романтический пакет" />
          <div className="order">
            <div className=" prices price">
              <h5>8200 ₽</h5>
              <h4>7200 ₽</h4>
            </div>

            <a value="БЕЗУМНЫЙ ВЕЧЕР" href="/booking" className="buy-button">
              <h4 className="orderBtn" >ЗАКАЗАТЬ</h4>
            </a>
          </div>
        </div>
        <div className="card CoupleCard">
          <h3 className="tc">НА ЗВЕЗДАХ</h3>
          <img src={ThirdPackage} alt="романтический пакет" />
          <div className="order">
            <div className=" price">
              <h4>12900 ₽</h4>
            </div>
            <a value="НА ЗВЕЗДАХ" href="/booking" className="buy-button">
              <h4 className="orderBtn">ЗАКАЗАТЬ</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="card groupCard " style={{ display: selectedOption === 1 ? 'block' : 'none' }}>
        <h3>КОМПАНИЙ</h3>
        <img src={FourthPackage} alt="групповой пакет" />
        <div className="order">
          <div className="price">
            <h4>от 2000</h4>
          </div>
          <a value="КОМПАНИЙ" href="/booking" className="buy-button">
              <h4 className="orderBtn">ЗАКАЗАТЬ</h4>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Section5;