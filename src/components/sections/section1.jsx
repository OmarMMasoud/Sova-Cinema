import React from 'react'

//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section1.scss"

//components 
import Nav from '../nav'

function section1() {
  return (
    
           <section className='section1'>
           <Nav/>
   <div className="main">
   <h1>КИНОТЕАТР ДЛЯ ДВОИХ Или ХАЙПОВОЕ МЕСТО ДЛЯ КОМПАНИЙ</h1>
   <p>SovaCinema это место, которое поможет тебе выбрать идеальный подарок для своей половинки, тоже место которое поможет твоей вечно орущей компании отпраздновать твой день, без соседей, без комплексов, без проблем. Игры, профессиональное караоке и вкусный кальян</p>
   <button>Заказать</button>

   </div>
   </section>
  )
}

export default section1