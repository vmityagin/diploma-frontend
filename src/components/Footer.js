import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h6 className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</h6>
        <div className="footer__box">
          <div>
            <p className="footer__copyright">&copy;2022</p>
          </div>
          <ul className="footer__links">
            <li>
              <a
                href="https://praktikum.yandex.ru/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
    </footer>
  );
}

  export default Footer;
