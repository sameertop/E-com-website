import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import About from "./Pages/About"
import Navbar from './Products.jsx/Navbar'
import Mainlayout from './Products.jsx/Mainlayout'
import Singleproductpage from './Pages/Singleproductpage'
import Wishlist from './Pages/Wishlist'
import Checkoutpage from './Pages/Checkoutpage'



function App() {
  return (
    <div>
<Routes>
  <Route path='/' element={<Mainlayout/>}>
<Route path='/' element={<Home/>}/>
<Route path='cart' element={<Cart/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='product' element={<Product/>}/>
<Route path='about' element={<About/>}/>
<Route path='product/:id' element={<Singleproductpage/>}/>
<Route path='wishlist' element={<Wishlist/>}/>
<Route path='checkout' element={<Checkoutpage/>}/>
</Route>
</Routes>
    </div>
  )
}

export default App