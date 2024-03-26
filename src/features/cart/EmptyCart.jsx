import { LinkButton } from "../../ui/LinkButton.jsx";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 rounded-md bg-red-100 p-2 font-semibold text-red-700">
        Your cart is still empty. Start adding some pizzas :) 🍕🍕🍕
      </p>
    </div>
  );
}

export default EmptyCart;
