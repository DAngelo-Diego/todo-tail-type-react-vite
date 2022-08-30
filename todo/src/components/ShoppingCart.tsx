import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      {isOpen ? (
        <div>
          <div
            onClick={closeCart}
            className="absolute top-0 left-0 h-full w-full bg-slate-300/30"
          ></div>
          <div className="flex flex-col absolute top-0 right-0 w-96 h-full bg-slate-200 shadow-xl shadow-slate-900/60">
            <div className="flex justify-between items-center gap-3 p-6">
              <h2 className="text-3xl font-semibold">Cart</h2>
              <button onClick={closeCart}>X</button>
            </div>
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <span className="flex gap-2  justify-center text-2xl">
                Total:
                <span className="font-semibold border-b-2 border-orange-400">
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find(
                        (item) => item.id === cartItem.id
                      );
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </span>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
