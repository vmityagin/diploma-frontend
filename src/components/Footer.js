import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <h6 className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</h6>
        <div className="footer__box">
          <div>
            <p className="footer__copyright">&copy;2022</p>
          </div>
          <ul className="footer__links">
            <li>
              <a className="footer__link">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__link">Github</a>
            </li>
          </ul>
        </div>
    </section>
  );
}

  export default Footer;
