import Subtitle from "../Subtitle/Subtitle";
import "../Information/Information.css";

function Information() {
  return (
    <article className="information-container">
      <Subtitle subtitle={"Languages"} />

      <div className="speaker-container">
        <p className="speaker">
          <span className="flag">🇧🇷</span>
          <abbr title="Português Brasileiro">PT-BR</abbr> - Native Speaker
        </p>

        <p className="speaker">
          <span className="flag">🇺🇸</span>
          <abbr title="English">EN</abbr> - Basic
        </p>
      </div>

      <Subtitle subtitle={"Education"} />
      <div className="education-container">
        <span>🎓</span>
        <p className="graduated">
          Graduated in Computer Science Technician at Instituto Federal do Piauí
          (IFPI) - Campus Angical
        </p>
      </div>
    </article>
  );
}

export default Information;
