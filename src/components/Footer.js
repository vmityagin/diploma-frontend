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
              <p className="footer__link">Яндекс.Практикум</p>
            </li>
            <li>
              <p className="footer__link">Github</p>
            </li>
          </ul>
        </div>
    </section>
  );
}

  export default Footer;
