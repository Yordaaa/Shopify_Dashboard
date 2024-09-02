import { Route, Routes } from "react-router-dom";
import ProductListPage from "./Dashboard/ProductListPage";
import Home from "./Dashboard/Home";
import Cart from "./Dashboard/Cart";
import WooCommerce from "./Dashboard/WooCommerce";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/woocommerce" element={<WooCommerce />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
