import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice.js";
import { formatCurrency } from "../../utils/helpers.js";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  //*************** doing that isn't a good practice when using redux, it's better to chaining with the useSelector hook to get the needed derived values from state.
  // const { cart } = useSelector((state) => state.cart);
  // const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  // const totalPrice = cart.reduce((acc, item) => {
  //   return acc + item.totalPrice;
  // }, 0);

  if (!totalQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <p className="hidden space-x-2 text-xs italic text-yellow-500 sm:block md:text-sm">
        ILAHI Nizar&copy;2024
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
