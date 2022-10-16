import React from 'react';
import avatar from '../../images/portfolio__image.jpg';

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
            Я родился в Тольятти, а живу и работаю в Москве.
            У меня есть жена и сын. Я занимаюсь плаванием, а ещё недавно увлекся катанием на скейтборде.
            Сейчас работаю в маркетинге. Сайты - это мой рабочий инструмент. С их помощью мои клиенты зарабатывают деньги.
            А я привлекаю им продажи. В 2022 году трудно быть просто маркетологом. Нужно разбираться в веб-аналитике и уметь ставить задачи разработчикам.
            Это работает и для крупных корпораций, и для частного бизнеса. В первом случае с крупными командами надо говорить на одном языке.
            Во втором случае, объяснить с первого раза, чтобы не пришлось переделывать несколько раз. Трудочасы разработчика для малого бизнеса – это большая статья расходов.
            После того, как прошёл курс по веб-разработке, продолжаю создавать проекты для близких и друзей. Активно применяю знания в рабочей среде ежедневно.
          </p>

          <p className="portfolio__link">Github</p>
        </div>

        <div className="portfolio__avatar">
          <img className="portfolio__image" src={avatar} alt="Веб-разработка фото"/>
        </div>

      </div>

      <div className="portfolio__links">
        <h5 className="portfolio__subtext">Портфолио</h5>
      </div>

    </section>
  );
}

  export default Portfolio;
