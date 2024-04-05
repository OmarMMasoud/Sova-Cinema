import React, { useRef } from 'react'
import emailjs from 'emailjs-com'


//////////////////////// don't send ///////////*************


//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section6.scss"

//img
import Img from '../../style/imgs/contactImg.png' 



const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init('agNLWx7R4RhI_m_4O');

    emailjs.sendForm('service_Sova90', 'template_sovaCiema', form.current)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log('FAILED...', error.text);
      });
  };

  return (
    <section  id='section6' className='section6'>
      <form className="contactForm" onSubmit={sendEmail} ref={form}>
        <div className="content">
          <h3>Отправить Сообщение</h3>
          <p>Мы всегда готовы ответить на любые интересующие Вас вопросы, быстро и полно. Связаться с нами можно любым удобным способом:</p>
          <input type="text" name="name" placeholder="ВАШЕ ИМЯ" required />
          <input id="phone" type="tel" name="user_phone" placeholder="ВАШ ТЕЛЕФОН" required />
          <textarea id="message" type="text" name="message" placeholder="КОММЕНТАРИЙ" required></textarea>
          <button type='submit' value={"send"}>ОТПРАВИТЬ </button>
        </div>
      </form>
      <img src={Img} alt="contact SovaCinema" />
    </section>
  );
};

export default ContactUs;