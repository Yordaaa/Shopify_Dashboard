import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="shadow-sm pb-1 flex justify-end px-5">
      
      <div className="flex gap-3 items-center use">
        <h1>Hey Admin</h1>
        <i className="fas fa-user text-gray-800 text-xl"></i>
        <Link to="cart">
          <i className="fas fa-globe text-gray-800 text-xl"></i>
        </Link>
        <i className="fas fa-bell text-gray-800  text-xl"></i>
      </div>
    </div>
  );
}

export default Header;
