import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <p className="space-x-2 text-xs text-yellow-500 md:text-sm">
        ILAHI Nizar&copy;2024
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
