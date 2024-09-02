import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useWoocommerceRegistrationMutation } from "../Redux/Features/authApiSlice";

function WooCommerce() {
  const [url, setUrl] = useState("");
  const [consumerKey, setConsumerKey] = useState("");
  const [consumerSecret, setConsumerSecret] = useState("");
  const [shopName, setShopName] = useState("");

  const [registration, { isLoading }] = useWoocommerceRegistrationMutation();
  const navigate = useNavigate();

  const connectHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registration({
        url,
        consumerKey,
        consumerSecret,
        shopName,
      }).unwrap();

      if (res.success) {
        toast.success(res.message);
        setUrl("");
        setConsumerKey("");
        setConsumerSecret("");
        setShopName("");
        navigate("/product");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occurred");
      console.log("Error:", error?.data?.message || "An error occurred");
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
          <div className="mb-4">
            <label htmlFor="shopName" className="block text-gray-700">
              Shop Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              id="shopName"
              type="text"
              placeholder="Enter Shop Name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
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
