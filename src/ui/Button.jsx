import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm focus:ring-offset inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed focus:transition focus:duration-300";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "focus:ring-offset inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 hover:text-stone-800 disabled:cursor-not-allowed focus:transition focus:duration-300 px-4 py-2.5 md:px-6 md:py-3.5 ",
  };
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
