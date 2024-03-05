import React, { useRef } from 'react'
import emailjs from 'emailjs-com'


//////////////////////// don't send ///////////*************


//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section6.scss"

//img
import Img from '../../style/imgs/contactImg.png' 


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1p9el3s', 'template_sova', form.current, {
        publicKey: 'mGjpmdBrC9NBwqG-v',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };  return (
    <section  id='section6' className='section6'>
          <form className="contactForm" onSubmit={sendEmail} ref={form}>        <div className="content">
          <h3>Отправить Сообщение</h3>
          <p>Мы всегда готовы ответить на любые интересующие Вас вопросы, быстро и полно. Связаться с нами можно любым удобным способом:</p>

          <input type="text" name="name" placeholder="ВАШЕ ИМЯ" required />
          <input type="tel" name="phone" placeholder="ВАШ ТЕЛЕФОН" required />
          <textarea name="message" placeholder="СООБЩЕНИЕ" required></textarea>

          <button type='submit' value={"send"}>ОТПРАВИТЬ СООБЩЕНИЕ</button>
        </div>
      </form>
      <img src={Img} alt="contact us" />
    </section>
  )
}

export default ContactUs