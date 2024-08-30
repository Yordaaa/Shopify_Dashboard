import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="left-0 w-52 min-h-screen z-50 bg-white use shadow-md p-1">
      <div className="">
        <h2 className="text-2xl font-semibold p-1 mb-10">Maveko</h2>
      </div>
      <nav className="mt-">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center p-1 text-gray-800 rounded-lg hover:bg-gray-700 hover:text-white"
            >
              <i className="fas fa-chart-line mr-2"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-1 text-gray-800 rounded-lg hover:bg-gray-700 hover:text-white"
            >
              <i className="fas fa-chart-line mr-2"></i>
              All Customers
            </a>
          </li>
          <li>
            <Link
              to="/product"
              className="flex items-center p-1 text-gray-800 rounded-lg hover:bg-gray-700 hover:text-white"
            >
              <i className="fas fa-chart-line mr-2"></i>
              All Products
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
