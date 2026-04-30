import { DATA } from "../../utils/data";
import './Hero.css'

export const Hero = () => {
    const d = DATA;
  return (
    <section className="hero container">
      <div className="hero-grid-bg" />
      <div className="hero-eyebrow">
        {d.role} ·{" "}
        {d.available
          ? "Disponible para proyectos"
          : "No disponible actualmente"}
      </div>
      <h1 className="hero-title">
        <div>Construyo</div>
        <div className="line2">experiencias</div>
        <div>digitales.</div>
      </h1>
      <p className="hero-desc">{d.heroDesc}</p>
      <div className="hero-cta">
        <button className="btn-primary" onClick={() => scrollTo("projects")}>
          Ver proyectos
        </button>
        <button className="btn-outline" onClick={() => scrollTo("contact")}>
          Contactar
        </button>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
};
