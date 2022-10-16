import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__header">
        Технологии
      </h2>

      <div className="techs__box">
        <h3 className="techs__headline">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>

      <ul className="techs__langs">
        <li className="techs__lang">
          <h4 className="techs__name">HTML</h4>
        </li>
        <li className="techs__lang">
          <h4 className="techs__name">CSS</h4>
        </li>
        <li className="techs__lang">
          <h4 className="techs__name">JS</h4>
        </li>
        <li className="techs__lang">
          <h4 className="techs__name">React</h4>
        </li>
        <li className="techs__lang">
          <h4 className="techs__name">Git</h4>
        </li>
        <li className="techs__lang">
          <h4 className="techs__name">Express.js</h4>
        </li>
        <li className="techs__lang">
          <h4 className="techs__name">mongoDB</h4>
        </li>
      </ul>

    </section>
  );
}

  export default Techs;
