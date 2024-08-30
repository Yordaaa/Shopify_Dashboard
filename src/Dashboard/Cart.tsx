import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../Redux/Features/cartSlice";
import { cartSelector } from "../Redux/Features/selector";
import { FormEvent, useState } from "react";
import { useSendToShopifyMutation } from "../Redux/Features/authApiSlice";

export default function Cart() {
  const cartItems = useSelector(cartSelector);
  const dispatch = useDispatch();
  const [shopName, setShopName] = useState("");
  const [sendToShopify, { isLoading }] = useSendToShopifyMutation();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart({ _id: id }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const products = cartItems.map((item) => ({
      code: item.code,
    }));

    console.log("Sending data to Shopify:", {
      name: shopName,
      products,
    });

    try {
      const response = await sendToShopify({
        name: shopName,
        products,
      }).unwrap();

      if (response.success) {
        console.log("Data sent to Shopify successfully!");
        setShopName("");
        dispatch(clearCart());
      } else {
        console.log("Failed to send data to Shopify:", response.message);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return cartItems.length > 0 ? (
    <div className="max-w-screen-md pt-20 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul role="list" className="divide-y">
        {cartItems.map((item) => (
          <li key={item._id} className="flex py-6">
            <div className="h-24 rounded-md border p-1 border-gray-200">
              <img
                src={item.productImg}
                alt={item.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between font-medium text-gray-900">
                  <h3>
                    <Link to="#">{item.name}</Link>
                  </h3>
                </div>
                <h3>
                  <Link to="#">{item.description}</Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.weight}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <button
                  type="button"
                  onClick={() => handleRemoveItem(item._id)}
                  className="font-medium bg-red-600 p-2 text-white hover:opacity-70"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit} className="mt-6">
        <div className="space-y-3">
          <input
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="Enter shop name"
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 w-full text-white bg-blue-950 hover:opacity-90 font-medium rounded-lg px-5 py-2.5 text-center"
        >
          {isLoading ? "Sending..." : "Send to Shopify"}
        </button>
      </form>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center text-center">
      <h2 className="text-2xl font-bold mb-4">Cart is empty</h2>
    </div>
  );
}
