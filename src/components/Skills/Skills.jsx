import { Frontend } from "./Frontend";
import "./Skills.css";

export function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Meu nível técnico</span>

      <div className="skills__container container grid">
        <Frontend />
      </div>
    </section>
  );
}
