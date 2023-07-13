import { Frontend } from "./Frontend";
import "./Skills.css";

export function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
      </div>
    </section>
  );
}
