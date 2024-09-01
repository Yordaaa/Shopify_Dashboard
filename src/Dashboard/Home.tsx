import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegistrationMutation } from "../Redux/Features/authApiSlice";
import { toast } from "react-toastify";

function Home() {
  const [apiKey, setApiKey] = useState("");
  const [apiSecretKey, setApiSecretKey] = useState("");
  const [shopUrl, setShopUrl] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const [registration, { isLoading }] = useRegistrationMutation();
  const navigate = useNavigate();

  const connectHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registration({
        apiKey,
        apiSecretKey,
        shopUrl,
        accessToken,
      }).unwrap();

      if (res.success) {
        toast.success(res.message);
        setApiKey("");
        setApiSecretKey("");
        setShopUrl("");
        setAccessToken("");
        navigate("/product");
      }
    } catch (error: any) {
      console.log("Error:", error?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="w-full use">
      <div className="max-w-screen-sm mx-auto pt-5 px-7 border p-5 mt-10 rounded-md">
        <form onSubmit={connectHandler}>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-00 "
              id="shopUrl"
              type="text"
              placeholder="Enter shopUrl"
              value={shopUrl}
              onChange={(e) => setShopUrl(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-00 "
              id="apiKey"
              type="text"
              placeholder="Enter apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-00 "
              id="apiSecretKey"
              type="text"
              placeholder="Enter apiSecretKey"
              value={apiSecretKey}
              onChange={(e) => setApiSecretKey(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-00 "
              id="accessToken"
              type="text"
              placeholder="Enter accessToken"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
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

export default Home;
