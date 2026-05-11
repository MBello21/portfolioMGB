import { DATA } from "../../utils/data";

export const Footer = () => {
    const d = DATA
  return (
    <footer className="text-center">
      <p>
        © {new Date().getFullYear()} · {d.footer}
      </p>
    </footer>
  );
};
