import React from 'react'

//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section7.scss"



//imgs
import map from '../../style/imgs/map.png'

function Section7() {
  return (
<section className='section7'>
   <a href="https://yandex.ru/maps/47/nizhny-novgorod/house/nizhne_volzhskaya_naberezhnaya_19/YEoYfw9jQUMGQFtsfX9zdnVgZA==/?ll=43.983861%2C56.327930&z=16.59"> <img href="" src={map} alt="sova location" /></a>
      <h3>МЫ НА СВЯЗИ!</h3>
      <p>
      Россия,Нижний <br/> НовгородНижневолжская наб., дом 19
        <br /> 
        E: <a href="mailto:cinemasova@gmail.com">cinemasova@gmail.com</a>
        <br /> 
   P: <a href="tel:+7 (831) 423 31 32">+7 (831) 423 31 32</a>
      </p>
   </section>  )
}

export default Section7