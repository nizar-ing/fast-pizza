import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

export function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast Pizza Co.</Link>
      <SearchOrder />
      <p>I. Nizar</p>
    </header>
  );
}
