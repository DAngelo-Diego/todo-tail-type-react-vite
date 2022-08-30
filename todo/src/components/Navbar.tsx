import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <nav className="sticky top-0 bg-white">
      <ul className="font-thin shadow-md mb-3 text-2xl  px-4 py-4 flex justify-between  text-slate-700">
        <div className="flex gap-6 pb-2">
          <li>
            <Link to="/">
              <h1 className="border-b-2 hover:border-b-2 hover:border-orange-400">
                Home
              </h1>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h1 className="border-b-2 hover:border-b-2 hover:border-orange-400">
                Store
              </h1>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h1 className="border-b-2 hover:border-b-2 hover:border-orange-400">
                About
              </h1>
            </Link>
          </li>
        </div>
        <div>
          {cartQuantity > 0 && (
            <button onClick={openCart} className="w-8 h-8 mx-6 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="bg-orange-500 rounded-full absolute w-6 h-6  text-white text-base flex justify-center items-center bottom-0 right-0 transform translate-x-4 translate-y-3">
                {cartQuantity}
              </div>
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
};
