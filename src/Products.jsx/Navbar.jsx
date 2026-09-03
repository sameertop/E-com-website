import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductContext from "../Context/context";
import { Heart } from "lucide-react";

function Navbar() {
  const { pathname } = useLocation();

  const {
    searchbar,
    setsearchbar,
    cartProductslist,
    wishlistedproduct,
  } = useContext(ProductContext);

  return (
    <div>
      <div className="flex justify-between bg-black border-b-2 border-slate-200 text-gray-300 px-4 py-2 items-center">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            SAMEER TOP
          </h1>
        </div>

        {/* Search */}
        <input
          className="border border-slate-300 w-5/12 px-2 py-1 rounded m-1 text-slate-300"
          type="text"
          name="search"
          id="search"
          value={searchbar}
          placeholder="search products by title or description"
          onChange={(e) => setsearchbar(e.target.value)}
        />

        {/* Navigation */}
        <div>
          <ul className="flex justify-between gap-7 font-semibold">

            {/* Home */}
            <li
              className={`${
                pathname === "/"
                  ? "border-b-3 border-blue-400"
                  : "hover:text-white"
              }`}
            >
              <Link to="/">Home</Link>
            </li>

            {/* Product */}
            <li
              className={`${
                pathname === "/product"
                  ? "border-b-3 border-blue-400"
                  : "hover:text-white"
              }`}
            >
              <Link to="/product">Product</Link>
            </li>

            {/* Cart */}
            <li
              className={`relative ${
                pathname === "/cart"
                  ? "border-b-3 border-blue-400"
                  : "hover:text-white"
              }`}
            >
              <Link to="/cart">Cart</Link>

              <span className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {cartProductslist.length}
              </span>
            </li>

            {/* Wishlist */}
            <li
              className={`relative ${
                pathname === "/wishlist"
                  ? "border-b-3 border-blue-400"
                  : "hover:text-white"
              }`}
            >
              <Link to="/wishlist">
                <Heart
                  fill="red"
                  className="text-red-500"
                  size={24}
                  strokeWidth={2.25}
                />
              </Link>

              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {wishlistedproduct.length}
              </span>
            </li>

            {/* Contact */}
            <li
              className={`${
                pathname === "/contact"
                  ? "border-b-3 border-blue-400"
                  : "hover:text-white"
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>

            {/* About */}
            <li
              className={`${
                pathname === "/about"
                  ? "border-b-3 border-blue-400"
                  : "hover:text-white"
              }`}
            >
              <Link to="/about">About</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;