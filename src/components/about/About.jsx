import { DATA } from "../../utils/data";
import "./About.css";

export const About = () => {
  const d = DATA;
  return (
    <section id="about">
      <div className="section-label mt-2 mb-3">01 — Sobre mí</div>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">{d.about.title}</h2>
          {d.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="about-stats">
          {d.about.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
