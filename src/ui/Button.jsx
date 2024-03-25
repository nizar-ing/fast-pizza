import { Link } from "react-router-dom";

export function Button({ children, disabled, to }) {
  const classStyles =
    "inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800\n" +
    "             transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring\n" +
    "              focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to)
    return (
      <Link to={to} className={classStyles}>
        {children}
      </Link>
    );
  return (
    <button className={classStyles} disabled={disabled}>
      {children}
    </button>
  );
}
