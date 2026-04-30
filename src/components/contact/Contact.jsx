import { DATA } from "../../utils/data";
import "./Contact.css";

export const Contact = () => {
  const d = DATA;

  return (
    <section id="contact">
      <div className="section-label">04 — Contacto</div>
      <div className="contact-inner">
        <h2 className="contact-title">
          ¿Trabajamos
          <br />
          <em>juntos?</em>
        </h2>
        <div className="contact-grid">
          {d.contact.map((c, i) => (
            <a
              key={i}
              className="contact-card"
              href={c.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-card-top">
                <div className="contact-icon"></div>
                <span className="contact-arrow">↗</span>
              </div>
              <div>
                <div className="contact-link-name">{c.label}</div>
                <div className="contact-link-value">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
