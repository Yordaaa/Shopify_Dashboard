import { Route, Routes } from "react-router-dom";
import ProductListPage from "./Dashboard/ProductListPage";
import Home from "./Dashboard/Home";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
