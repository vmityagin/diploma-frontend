import React from 'react';

function AboutProject() {
  return (
    <section className="about" id="about" name="about">
      <h2 className="about__header block-header">
        О проекте
      </h2>

      <ul className="steps">
        <li className="steps__part">
          <h3 className="steps__heading">Дипломный проект включал 5 этапов</h3>
          <p className="steps__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="steps__part">
          <h3 className="steps__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="steps__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className="timetable">
        <li className="timetable__part">
          <h4 className="timetable__firstRectangle timetable__heading">1 неделя</h4>
          <p className="timetable__text">Back-end</p>
        </li>
        <li className="timetable__part">
          <h3 className="timetable__secondRectangle timetable__heading">4 недели</h3>
          <p className="timetable__text">Front-end</p>
        </li>
      </ul>

    </section>
  );
}

  export default AboutProject;
