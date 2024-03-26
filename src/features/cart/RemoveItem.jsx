import { Button } from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice.js";

export function RemoveItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(pizzaId))}>
      Remove
    </Button>
  );
}
