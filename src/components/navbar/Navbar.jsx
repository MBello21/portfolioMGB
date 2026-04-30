import { useEffect, useState } from "react";
import { DATA } from "../../utils/data";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const d = DATA;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const handleScroll = () => setShow(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <>
      <nav className="portfolio-nav w-100">
        <div className="nav-logo">
          <a href="#">
            {d.name.split(" ")[0].toUpperCase()}
            <span>.</span>
            {d.name.split(" ").slice(1).join(" ").toUpperCase()}
          </a>
        </div>
        <div className="mobile">
          <button className="btn btn-custom-nav" onClick={() => setShow(!show)}>
            <i
              className={`fa-solid ${show ? "fa-xmark" : "fa-bars"} menu-icon ${show ? "active" : ""}`}
            ></i>
          </button>
        </div>
        <div className="desktop">
          <ul className="nav-links">
            {[{name:"Sobre mi", id:"about"}, {name:"proyectos", id:"projects"}, {name:"skills", id:"skills"}, {name:"contacto", id:"contact"}].map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.name.charAt(0).toUpperCase() + l.name.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <AnimatePresence>
        {show && (
          <motion.div
            className="collapsed-menu text-dark"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <ul className="collapsed-nav-links">
              {[{name:"Sobre mi", id:"about"}, {name:"proyectos", id:"projects"}, {name:"skills", id:"skills"}, {name:"contacto", id:"contact"}].map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.name.charAt(0).toUpperCase() + l.name.slice(1)}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
