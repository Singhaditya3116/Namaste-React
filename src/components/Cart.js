import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">CART</h1>

      <div className="p-5 m-5 border-2 rounded relative">
        {cartItems.length > 0 && (
          <button
            className="bg-red-600 p-2 rounded absolute right-5 top-2"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        <ul>
          {cartItems.map((item) => {
            return (
              <li className="border-gray-600 border-b-2 p-2" key={item.id}>
                {item.name} -{" "}
                <span className="font-semibold">₹ {item.price}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
