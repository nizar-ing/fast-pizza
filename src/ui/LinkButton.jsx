import { Link, useNavigate } from "react-router-dom";

export function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classStyles =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return (
      <button className={classStyles} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link className={classStyles} to={to}>
      {children}
    </Link>
  );
}
