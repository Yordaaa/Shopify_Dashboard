import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../Redux/Features/productApiSlice";
import { addToCart } from "../Redux/Features/cartSlice";
import { productResTyp } from "../Redux/Features/types";
import { cartSelector } from "../Redux/Features/selector";
import { ChangeEvent, useState } from "react";
import { Pagination } from "flowbite-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { paramsProps } from "./types";

const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector);
  const handleOnClick = (product: productResTyp) => {
    dispatch(addToCart(product));
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    searchParams.set("page", page.toString());
    navigate("?" + searchParams);
  };

  const onchangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    searchParams.set("page", "1");
    searchParams.set("keyword", keyword);
    navigate("?" + searchParams.toString());
    setCurrentPage(1);
  };
  const page = Number(searchParams.get("page")) || 1;
  const keyword = searchParams.get("keyword") || "";
  const params: paramsProps = { keyword, page };

  const { data: products, error, isLoading } = useGetAllProductsQuery(params);

  if (isLoading) return <p className="text-center">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching products</p>;

  return (
    <div className="container p-5 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">Product List</h1>

      <div className="relative m-2 my-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <i className="fas fa-search"></i>
        </div>
        <input
          type="search"
          onChange={onchangeSearch}
          className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
          placeholder="Enter keyword"
          name="searchKeyWord"
        />
      </div>

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
          {products?.products.map((product) => {
            const isInCart = cartItems.some((item) => item._id === product._id);
            return (
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
                    disabled={isInCart}
                    className={`w-full ${
                      isInCart
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-purple-950 hover:opacity-80"
                    } text-white py-1 rounded-md`}
                  >
                    {isInCart ? "In Cart" : "Add to cart"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {products?.filteredProductCount > products?.resPerPage! && (
        <div className="flex overflow-x-auto  justify-center pt-5">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              products?.filteredProductCount! / products?.resPerPage!
            )}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
