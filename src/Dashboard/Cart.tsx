import { useSelector, useDispatch } from "react-redux";
import { ErrorResponse, Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../Redux/Features/cartSlice";
import { cartSelector } from "../Redux/Features/selector";
import { FormEvent, useState } from "react";
import { useSendToShopifyMutation } from "../Redux/Features/shopsApiSlice";
import { toast } from "react-toastify";
import { successMessage } from "./types";

export default function Cart() {
  const cartItems = useSelector(cartSelector);
  const dispatch = useDispatch();
  const [shopName, setShopName] = useState("");
  const [prices, setPrices] = useState<{ [key: string]: number }>({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [sendToShopify, { isLoading }] = useSendToShopifyMutation();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart({ _id: id }));
  };

  const handlePriceChange = (id: string, price: string) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [id]: parseFloat(price),
    }));
  };

  const handleQuantityChange = (id: string, quantity: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: parseInt(quantity),
    }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const products = cartItems.map((item) => ({
      ...item,
      price: prices[item._id],
      quantity: quantities[item._id],
    }));

    console.log("Sending data to Shopify:", {
      name: shopName,
      products,
    });

    try {
      const res = await sendToShopify({
        shopName,
        products,
      });
      if ("data" in res) {
        const { data } = res as { data: successMessage };
        if (data.success) {
          toast.success(data.message);
          setShopName("");
          setPrices({});
          setQuantities({});
          dispatch(clearCart());
        }
      } else {
        const { error } = res as { error: ErrorResponse };
        toast.error(error.data.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return cartItems.length > 0 ? (
    <div className="max-w-screen-md pt-20 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Selected products</h1>
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
                <div className="flex gap-5">
                  <div className="mt-2">
                    <input
                      type="number"
                      placeholder="Enter price"
                      value={prices[item._id] || ""}
                      onChange={(e) =>
                        handlePriceChange(item._id, e.target.value)
                      }
                      className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      value={quantities[item._id] || ""}
                      onChange={(e) =>
                        handleQuantityChange(item._id, e.target.value)
                      }
                      className="border rounded w-full py-2 px-3 text-gray-700"
                    />
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
