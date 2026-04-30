import { useState } from "react";
import { DATA } from "../../utils/data";
import "./Projects.css";

export const Projects = () => {
  const d = DATA;
  const [, setHover] = useState(null);

  return (
    <section id="projects">
      <div className="section-label">02 — Proyectos</div>
      <div className="projects-grid">
        {d.projects.map((p, i) => (
          <div
            key={i}
            className={`project-card${p.featured ? " project-featured" : ""}`}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <a
              className="project-link"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              ↗
            </a>
            <div className="project-tag">{p.tag}</div>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t, j) => (
                <span key={j} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
