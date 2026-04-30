import { DATA } from "../../utils/data";
import "./Skills.css";

export const Skills = () => {
  const d = DATA;
  return (
    <section id="skills">
      <div className="section-label">03 — Skills</div>
      <div className="skills-layout">
        <div className="skills-intro">
          <h2 className="section-title">Mi stack.</h2>
          <p>
            Herramientas y tecnologías con las que trabajo habitualmente.
            Siempre aprendiendo nuevas.
          </p>
        </div>
        <div className="skills-masonry">
          {d.skills.map((cat, i) => (
            <div key={i} className="skill-block">
              <div className="skill-block-title">{cat.category}</div>
              <div className="skill-list">
                {cat.items.map((item, j) => (
                  <span key={j} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
