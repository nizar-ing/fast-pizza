import { Button } from "../../ui/Button.jsx";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant.js";

export function UpdateOrderPriority({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="priority">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
