import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeCartQuantity } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center ml-2 h-24">
        <img
          src={item.imgUrl}
          className="object-contain h-full w-24"
          alt="different products"
        />
        <div className="flex ml-2 flex-col w-full">
          <h2 className="text-xl font-semibold">
            {item.name}
            {quantity > 1 && (
              <span className="text-sm ml-1 text-gray-400">x{quantity}</span>
            )}
          </h2>
          <p>{formatCurrency(item.price)}</p>
        </div>
      </div>
      <div className="flex items-baseline mr-2">
        {formatCurrency(item.price * quantity)}
        <button
          className="bg-orange-500 text-white border-2 px-3 py-1 m-2 rounded-md"
          onClick={() => removeCartQuantity(item.id)}
        >
          x
        </button>
      </div>
    </div>
  );
}
