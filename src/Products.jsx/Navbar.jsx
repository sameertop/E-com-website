import React, { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import ProductContext from '../Context/context'

function Navbar() {

  const { pathname } = useLocation()

  const { searchbar, setsearchbar } = useContext(ProductContext)
  return (
    <div>
      <div className='flex justify-between bg-black border-b-2 border-slate-200 text-gray-300 px-4 py-2 text-center items-center'>
        <div>
          <h1 className='text-3xl font-bold text-white '>SAMEER TOP</h1>
        </div>

        <input className='border border-slate-300 w-5/12 px-2  py-1 rounded m-1' type="text" name='search' id='search' value={searchbar} placeholder='search products by title or description' onChange={(e) => setsearchbar(e.target.value)} />

        <div>
          <ul className='flex justify-between gap-7 font-semibold '>
            <li className={`${pathname === "/" ? "border-b-3 border-blue-400" : "hover:text-white"}`}><Link to="/">Home</Link></li>

            <li className={`${pathname === "/product" ? "border-b-3 border-blue-400" : "hover:text-white"}`}><Link to="product">Product</Link></li>

            <li className={`${pathname === "/cart" ? "border-b-3 border-blue-400" : "hover:text-white"}`}><Link to="cart">Cart</Link></li>

            <li className={`${pathname === "/wishlist" ? "border-b-3 border-blue-400" : "hover:text-white"}`}><Link to="wishlist">Wishlist</Link></li>

            <li className={`${pathname === "/contact" ? "border-b-3 border-blue-400" : "hover:text-white"}`}><Link to="contact">Contact</Link></li>

            <li className={`${pathname === "/about" ? "border-b-3 border-blue-400" : "hover:text-white"}`}><Link to="about">About</Link></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar