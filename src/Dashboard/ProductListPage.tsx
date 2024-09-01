import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../Redux/Features/productApiSlice";
import { addToCart } from "../Redux/Features/cartSlice";
import { productResTyp } from "../Redux/Features/types";
import {  useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination } from "flowbite-react";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => {
    return Number(searchParams.get("page")) || 1;
  });

  useEffect(() => {
    // Sync currentPage with URL params
    setSearchParams({ page: currentPage.toString() });
  }, [currentPage, setSearchParams]);

  const handleOnClick = (product: productResTyp) => {
    dispatch(addToCart(product));
  };

  const {
    data: products,
    error,
    isLoading,
  } = useGetAllProductsQuery({ keyword: "", page: currentPage });

  if (isLoading) return <p className="text-center">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching products</p>;

  return (
    <div className="container p-5 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">Product List</h1>
      <form
        className="relative m-2 my-5"
        onSubmit={(e) => {
          e.preventDefault();
          // Implement search functionality if needed
        }}
      >
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <i className="fas fa-search"></i>
        </div>
        <input
          type="search"
          className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
          placeholder="Enter keyword"
          name="searchKeyWord"
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2 bg-gray-900 hover:opacity-90 font-medium rounded-md text-sm px-4 py-1"
        >
          Search
        </button>
      </form>
      <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Code</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.products.map((product) => (
            <tr
              key={product._id}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={product.productImg}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {product.code}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleOnClick(product)}
                  className="w-full bg-purple-950 text-white py-1 rounded-md hover:opacity-80"
                >
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex overflow-x-auto w-full justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            (products?.filteredProductCount ?? 0) / (products?.resPerPage ?? 1)
          )}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductListPage;
