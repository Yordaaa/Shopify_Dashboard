import React from "react";

function Header() {
  return (
    <div className="shadow-sm pb-1 flex justify-between px-5">
      <form className="relative w-[30%] m-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <i className="fas fa-search"></i>
        </div>
        <input
          type="search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
          placeholder="Enter keyword"
          name="searchKeyWord"
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2 bg-blue-900 hover:opacity-90 font-medium rounded-md text-sm px-4 py-0.5"
        >
          Search
        </button>
      </form>
      <div className="flex gap-3 items-center use">
        <h1>Hey Admin</h1>
        <i className="fas fa-user text-gray-800 text-xl"></i>
        <a href="">
          <i className="fas fa-globe text-gray-800 text-xl"></i>
        </a>
        <i className="fas fa-bell text-gray-800  text-xl"></i>
      </div>
    </div>
  );
}

export default Header;
