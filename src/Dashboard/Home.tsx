import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatedSubscribeButton } from "../../@/components/magicui/animated-subscribe-button";
import { useRegistrationMutation } from "../Redux/Features/authApiSlice";

function Home() {
  const [apiKey, setApiKey] = useState("");
  const [apiSecretKey, setApiSecretKey] = useState("");
  const [shopUrl, setShopUrl] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [shopName, setShopName] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(false);

  const [registration, { isLoading }] = useRegistrationMutation();
  const navigate = useNavigate();

  const connectHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending data to the server:", {
      apiKey,
      apiSecretKey,
      shopUrl,
      accessToken,
      shopName,
    });

    try {
      const res = await registration({
        apiKey,
        apiSecretKey,
        shopUrl,
        accessToken,
        shopName,
      }).unwrap();

      console.log("Server response:", res);

      if (res.success) {
        console.log("Success:", res.message);
        setSubscribeStatus(true);
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
              id="accessToken"
              type="text"
              placeholder="Enter accessToken"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-00 "
              id="shopName"
              type="text"
              placeholder="Enter shopName"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={isLoading}>
              <AnimatedSubscribeButton
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                subscribeStatus={subscribeStatus} // Use the state here
                initialText={
                  <span className="group inline-flex items-center px-4">
                    Connect{" "}
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Connected{" "}
                  </span>
                }
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
