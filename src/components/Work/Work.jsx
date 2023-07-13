import "./Work.css";
import { Works } from "./Works";

export function Work() {
  return (
    <section className="work section" id="portifolio">
      <h2 className="section__title">Portifolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <Works />
    </section>
  );
}
