import { useState } from "react";
import Home from "./Home";
import WooCommerce from "./WooCommerce";

function Connect() {
  const [activeTab, setActiveTab] = useState("shopify");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-2/3">
      <div className="relative right-0">
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
          role="list"
        >
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                activeTab === "shopify"
                  ? "text-white bg-gray-700"
                  : "text-gray-700 bg-gray-50"
              }`}
              onClick={() => handleTabClick("shopify")}
              role="tab"
              aria-selected={activeTab === "shopify"}
              aria-controls="shopify"
            >
              <span className="ml-1">Shopify</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                activeTab === "woocommerce"
                  ? "text-white bg-gray-700"
                  : "text-gray-700 bg-gray-50"
              }`}
              onClick={() => handleTabClick("woocommerce")}
              role="tab"
              aria-selected={activeTab === "woocommerce"}
              aria-controls="woocommerce"
            >
              <span className="ml-1">WooCommerce</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                activeTab === "magneto"
                  ? "text-white bg-gray-700"
                  : "text-gray-700 bg-gray-50"
              }`}
              onClick={() => handleTabClick("magneto")}
              role="tab"
              aria-selected={activeTab === "magneto"}
              aria-controls="magneto"
            >
              <span className="ml-1">Magneto</span>
            </a>
          </li>
        </ul>
        <div className="p-5">
          <div
            className={`${
              activeTab === "shopify" ? "block opacity-100" : "hidden opacity-0"
            }`}
            id="shopify"
            role="tabpanel"
          >
            <div>
              <Home />
            </div>
          </div>
          <div
            className={`${
              activeTab === "woocommerce"
                ? "block opacity-100"
                : "hidden opacity-0"
            }`}
            id="woocommerce"
            role="tabpanel"
          >
            <div>
              <WooCommerce />
            </div>
          </div>
          <div
            className={`${
              activeTab === "magneto" ? "block opacity-100" : "hidden opacity-0"
            }`}
            id="settings"
            role="tabpanel"
          >
            <div>Magneto</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
