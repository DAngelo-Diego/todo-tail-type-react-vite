import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="flex flex-col h-full bg-white/80 shadow-xl rounded-b-2xl pb-3 my-4 transition-all hover:scale-105">
      <img
        src={imgUrl}
        className="h-40
      w-60 object-cover"
      />
      <div className="flex justify-between items-baseline mx-2">
        <span className="text-2xl text-slate-700 font-semibold ">{name}</span>
        <span className="text-xl border-b-2 border-slate-400">
          {formatCurrency(price)}
        </span>
      </div>
      <div className="text-xl m-auto mt-2 px-4 py-2 rounded-lg">
        {quantity === 0 ? (
          <button
            className="text-white bg-orange-500 px-4
          py-2 rounded-full font-semibold hover:bg-orange-600"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to Cart
          </button>
        ) : (
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
              <button
                className="px-2 font-bold text-3xl rounded-sm"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div>
                <span className="text-xl font-bold">{quantity}</span> In cart
              </div>
              <button
                className="px-2 font-bold text-3xl rounded-sm"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="bg-gray-700/70 rounded-full font-medium text-white px-8 py-2"
              onClick={() => removeCartQuantity(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
