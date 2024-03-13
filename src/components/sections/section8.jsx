import React, { useState } from "react";
import "../../style/sectionsStyle/section8.scss";
import emailjs from 'emailjs-com';
import { useHistory } from "react-router-dom";


function BookingForm() {
  const [name, setName] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [message,setMessage] = useState(" ");
  const [choice, setChoice] = useState("");
  const [price, setPrice] = useState(" ");
  const [choiceDetails, setChoiceDetails] = useState(" ");
  const [date, setDate] = useState(" ");
  const [time, setTime] = useState(" ");
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      phone,
      message,
      choice,
      price,
      choiceDetails,
      date,
      time,
    };

    emailjs.send('service_Sova90', 'template_booking ', templateParams, 'agNLWx7R4RhI_m_4O')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChoiceChange = (e) => {
    setChoiceDetails(" ");
    const choiceValue = e.target.value;
    setChoice(choiceValue);
    setSelectedChoice(choiceValue);

    if (choiceValue === "РОМАНТИК") {
      setChoiceDetails(
        "Мы предоставляем в этом пакете: 2 часа увлекательного фильма на ваш выбор, чашку чая, вкусный попкорн, сладости, минеральную воду и свечи для атмосферы. Всё это приятное времяпрепровождение доступно для вас."
      );
      setPrice("3900₽");
    } else if (choiceValue === "БЕЗУМНЫЙ ВЕЧЕР") {
      setChoiceDetails(
        "Мы предоставляем в этом пакете: 3 часа захватывающего фильма на ваш выбор, чашку чая, вкусный попкорн, сладости, освежающий сок, свечи для уюта, лепестки роз, ужин на двоих, бутылку шампанского и фруктовую тарелку. Наслаждение этими удивительными деталями доступно для вас."
      );
      setPrice("7200₽");
    } else if (choiceValue === "НА ЗВЕЗДАХ") {
      setChoiceDetails(
        "Мы рады предложить вам в этом пакете: 4 часа наслаждения фильмом на ваш выбор, чашку чая, освежающий сок, минеральную воду, свечи для уюта, лепестки роз, букет цветов, ягоды, шоколадное лакомство, бутылку шампанского, вкусный попкорн, ужин на двоих. Наслаждение каждым элементом этого пакета ждет вас."
      );
      setPrice("12900₽");
    } else if (choiceValue === "КОМПАНИЙ") {
      setChoiceDetails(
        "Мы предлагаем вам: фильм на ваш выбор, настольные игры (мафия, бункер, дженга) и караоке. Незабываемое время веселья и развлечений гарантировано!"
      );
      setPrice("От 3900₽");
    }
  };

  return (
    <div className="section8">
      <form onSubmit={handleSubmit}>
        <h1>забронируйте фильм в SovaCinema</h1>

        <div className="userData">
          <input
            type="text"
            placeholder="Имя"
            className="form__input"
            id="name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="form__label">Имя </label>

          <input
            type="tel"
            placeholder="Номер телефона"
            className="form__input"
            id="phone"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="phone" className="form__label">Номер телефона</label>

          <input
            type="date"
            placeholder="Дата бронирования"
            className="form__input"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="date" className="form__label">Дата бронирования</label>

          <input
            type="time"
            placeholder="Бронирование времени"
            className="form__input"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <label htmlFor="time" className="form__label">Бронирование времени</label>

          <textarea
            type="input"
            placeholder="Сообщение"
            className="form__input"
            id="message"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor="message" className="form__label">Сообщение</label>
        </div>

        <hr />

        <div className="choises">
          <label>
            <span>Выберите Пакет:</span>
            <div className="custom-select">
              <select
                className="input"
                value={choice}
                onChange={handleChoiceChange}
              >
                <option value="">Выберите Пакет : </option>
                <option value="РОМАНТИК">РОМАНТИК - 3900₽</option>
                <option value="БЕЗУМНЫЙ ВЕЧЕР">БЕЗУМНЫЙ ВЕЧЕР - 7200₽</option>
                <option value="НА ЗВЕЗДАХ">НА ЗВЕЗДАХ - 12900₽</option>
                <option value="КОМПАНИЙ">КОМПАНИЙ - От 3900₽</option>
              </select>
            </div>
          </label>

          {choiceDetails && (
            <div>
              <p className="choiceDetails">{choiceDetails}</p>
            </div>
          )}
          <button type="submit">Жду звонка!</button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
