import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Levi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portifolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/levivalverde/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/Levi-Valverde"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://wa.me/5598991470654"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-whatsapp"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Levi. All rigths reserved</span>
      </div>
    </footer>
  );
}
