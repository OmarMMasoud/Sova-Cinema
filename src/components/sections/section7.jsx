import React from 'react'

//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section7.scss"



//imgs
import map from '../../style/imgs/map.png'
import vk from '../../style/imgs/social/vkIcon.svg'
import instagram from '../../style/imgs/social/instagramIcon.svg'

function Section7() {
  return (
<section className='section7'>
   <a href="https://yandex.ru/maps/-/CDRONWju"> <img href="" src={map} alt="sova location" /></a>
      <h3>МЫ НА СВЯЗИ!</h3>
      <p>
      Нижне-Волжская наб, дом 19 • этаж 3<br></br> Нижний Новгород, 603001 
        <br /> 
        E: <a href="mailto:cinemasova@gmail.com">cinemasova@gmail.com</a>
        <br /> 
   P: <a href="tel:+7 (831) 423 31 32">+7 (831) 423 31 32</a>
      </p>
   
      <ul class="list-inline ">
         <li><a href="https://vk.com/write-101845710" ><img src={vk} alt="Vkontakte" class="img-responsive"/></a></li>
         <li><a href="https//www.instagram.com/sova_cinema/"><img src={instagram} alt="Vkontakte" class="img-responsive"/></a></li>
      </ul>
   </section>  )
}

export default Section7