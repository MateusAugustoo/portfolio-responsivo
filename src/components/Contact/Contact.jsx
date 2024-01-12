import "../Contact/Contact.css";

function Contact() {
  return (
    <section className="sociais-container">
        <div className="icone-container">
          <a href="https://instagram.com/m_augusto444">
            <img
              className="icone"
              src="src/assets/icon-instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>

        <div className="icone-container">
          <a href="https://instagram.com/m_augusto444">
            <img
              className="icone"
              src="src/assets/icon-linkedin.svg"
              alt="Instagram"
            />
          </a>
        </div>

        <div className="icone-container">
          <a href="https://instagram.com/m_augusto444">
            <img
              className="icone"
              src="src/assets/icon-github.svg"
              alt="Instagram"
            />
          </a>
        </div>

        <div className="icone-container">
          <a href="https://instagram.com/m_augusto444">
            <img
              className="icone"
              src="src/assets/icon-x.svg"
              alt="Instagram"
            />
          </a>
        </div>

      <button className="btnContact">
        Contact Me <img src="src/assets/ic_outline-email.svg" alt="svg de um email" />
      </button>
    </section>
  );
}

export default Contact;
