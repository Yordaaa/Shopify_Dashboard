import { useGetAllProductsQuery } from "../Redux/Features/productApiSlice";

const ProductListPage = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useGetAllProductsQuery({ keyword: "", page: 1 });

  if (isLoading) return <p className="text-center">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching products</p>;

  return (
    <div className="container p-5 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">Product List</h1>

      <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </th>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Code</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {products?.products.map((product) => (
            <tr
              key={product._id}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;
