import React from 'react';
import avatar from '../../images/portfolio__image.jpg';
import buttonArrow from '../../images/portfolio__button.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header block-header">
        Студент
      </h2>

      <div className="portfolio__description">
        <div className="portfolio__text">
          <h3 className="portfolio__name">Вячеслав</h3>
          <h4 className="portfolio__profession">Фронтенд-разработчик, 28 лет</h4>
          <p className="portfolio__about">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <a href="https://github.com/vmityagin" className="portfolio__link"  target="_blank" rel="noreferrer">Github</a>
        </div>

        <div className="portfolio__avatar">
          <img className="portfolio__image" src={avatar} alt="Веб-разработка фото"/>
        </div>

      </div>

      <div className="portfolio__links">
        <h5 className="portfolio__subtext">Портфолио</h5>
        <ul className="portfolio__results">
          <li className="portfolio__element">
            <a className="portfolio__result" href="https://github.com/vmityagin/how-to-learn" target="_blank" rel="noreferrer" >
              <p className="portfolio__title">Статичный сайт</p>
              <img className="portfolio__button" src={buttonArrow} alt="Иконка перехода на сайт"/>
            </a>
          </li>
          <li className="portfolio__element">
            <a className="portfolio__result" href="https://github.com/vmityagin/russian-travel" target="_blank" rel="noreferrer" >
              <p className="portfolio__title">Адаптивный сайт</p>
              <img className="portfolio__button" src={buttonArrow} alt="Иконка перехода на сайт"/>
            </a>
          </li>
          <li className="portfolio__element">
            <a className="portfolio__result" href="https://github.com/vmityagin/react-mesto-api-full" target="_blank" rel="noreferrer" >
              <p className="portfolio__title">Одностраничное приложение</p>
              <img className="portfolio__button" src={buttonArrow} alt="Иконка перехода на сайт"/>
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
}

  export default Portfolio;
