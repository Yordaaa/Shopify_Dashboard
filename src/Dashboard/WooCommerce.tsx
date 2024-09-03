import { ErrorResponse, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useWoocommerceRegistrationMutation } from "../Redux/Features/shopsApiSlice";
import { successMessage } from "./types";

function WooCommerce() {
  const [url, setUrl] = useState("");
  const [consumerKey, setConsumerKey] = useState("");
  const [consumerSecret, setConsumerSecret] = useState("");

  const [registration, { isLoading }] = useWoocommerceRegistrationMutation();
  const navigate = useNavigate();

  const connectHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registration({
        url,
        consumerKey,
        consumerSecret,
      });

      if ("data" in res) {
        const { data } = res as { data: successMessage };
        if (data.success) {
          toast.success(data.message);
          setUrl("");
          setConsumerKey("");
          setConsumerSecret("");
          navigate("/product");
        }
      } else {
        const { error } = res as { error: ErrorResponse };
        toast.error(error.data.message);
      }
    } catch (error) {
      toast.error("An expexted  error occurred");
    }
  };

  return (
    <div className="w-full use">
      <div className="max-w-screen-sm mx-auto pt-5 px-7 border p-5 mt-10 rounded-md">
        <form onSubmit={connectHandler}>
          <div className="mb-4">
            <label htmlFor="url" className="block text-gray-700">
              URL
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              id="url"
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="consumerKey" className="block text-gray-700">
              Consumer Key
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              id="consumerKey"
              type="text"
              placeholder="Enter Consumer Key"
              value={consumerKey}
              onChange={(e) => setConsumerKey(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="consumerSecret" className="block text-gray-700">
              Consumer Secret
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              id="consumerSecret"
              type="text"
              placeholder="Enter Consumer Secret"
              value={consumerSecret}
              onChange={(e) => setConsumerSecret(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="mt-5 w-full text-white bg-gray-800 hover:opacity-90 font-medium rounded-lg px-5 py-2.5 text-center"
            >
              {isLoading ? "Connecting..." : "Connect"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WooCommerce;
