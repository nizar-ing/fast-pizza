import { formatCurrency } from "../../utils/helpers.js";
import { Button } from "../../ui/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice.js";
import { RemoveItem } from "../cart/RemoveItem.jsx";
import { UpdateItemQuantity } from "../cart/UpdateItemQuantity.jsx";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizza.id));

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-2 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut &&
            (isInCart ? (
              <div className="flex items-center gap-3 sm:gap-8">
                <UpdateItemQuantity
                  currentQuantity={currentQuantity}
                  pizzaId={id}
                />
                <RemoveItem pizzaId={id} />
              </div>
            ) : (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
