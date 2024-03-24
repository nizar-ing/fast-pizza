import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

export function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link className="tracking-widest" to="/">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
