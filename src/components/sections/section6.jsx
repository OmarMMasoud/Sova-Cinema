import React from 'react'
import emailjs from 'emailjs-com'


//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section6.scss"

//img
import Img from '../../style/imgs/contactImg.png' 

function Section6() {
  const form = React.useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    form.current.reset()
  }

  return (
    <section className='section6'>

      <div className="contactForm" onSubmit={sendEmail} ref={form}>
       <div className="content"> <h3>Отправить Сообщение</h3>
        <p>Мы всегда готовы ответить на любые интересующие Вас вопросы, быстро и полно. Связаться с нами можно любым удобным способом:</p>
        
        <div className='inputs'>
  
        <input type="text" name="name" placeholder="ВАШЕ ИМЯ" required/>
        <span class="underline"></span>
        
        </div>
        <div className='inputs'>
          <input type="tel" name="phone" placeholder="ВАШ ТЕЛЕФОН" required/>
          <span class="underline"></span>

           </div>
        
        <div className='inputs'>
          <textarea name="message" placeholder="СООБЩЕНИЕ" required></textarea>
          <span class="underline"></span>

        </div>
        <button type='submit'>ОТПРАВИТЬ СООБЩЕНИЕ</button>
      </div></div>
      <img src={Img} alt="contact us" />
    </section>
  )
}

export default Section6