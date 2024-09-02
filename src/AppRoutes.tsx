import { Route, Routes } from "react-router-dom";
import ProductListPage from "./Dashboard/ProductListPage";
import Cart from "./Dashboard/Cart";
import Connect from "./Dashboard/Connect";
import Login from "./Dashboard/Login";
import SendProduct from "./Dashboard/SendProduct";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sendproduct" element={<SendProduct />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
