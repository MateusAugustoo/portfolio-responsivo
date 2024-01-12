import "../Experience/Experience.css";
import Subtitle from "../Subtitle/Subtitle";

function Experience() {
  return (
    <article className="experience-container">
      <Subtitle subtitle={"Experience"} />
      <p className="experience">
        I have been working as a freelancer for a year and a half, and I am part
        of a digital menu startup.
      </p>

      <div className="experience-time-container">

        <div className="experience-time-layout">
          <img src="src/assets/icon-html.svg" alt="" />
          <div className="experience-time-content">
            <div className="time">
              1 years
            </div>
          </div>
        </div>

        <div className="experience-time-layout">
          <img src="src/assets/icon-css.svg" alt="" />
          <div className="experience-time-content">
            <div className="time">
              1 years
            </div>
          </div>
        </div>

        <div className="experience-time-layout">
          <img src="src/assets/icon-js.svg" alt="" />
          <div className="experience-time-content">
            <div className="time">
              1 years
            </div>
          </div>
        </div>

        <div className="experience-time-layout">
          <img src="src/assets/icon-tailwind.svg" alt="" />
          <div className="experience-time-content">
            <div className="time">
              1 years
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}

export default Experience;
