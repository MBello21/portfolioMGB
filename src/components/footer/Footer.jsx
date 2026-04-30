import { DATA } from "../../utils/data";

export const Footer = () => {
    const d = DATA
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {d.name} · {d.footer}
      </p>
    </footer>
  );
};
