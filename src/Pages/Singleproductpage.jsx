import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShoppingCart } from "lucide-react"
import ProductContext from '../Context/context';
import { toast } from 'react-toastify';

function Singleproductpage() {

  const { id } = useParams();
  const [singleProduct, setsingleProduct] = useState(null)
  const [error, seterror] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  const { cartProductslist, setcartProductslist } = useContext(ProductContext)

  const handleAddtoCart = (singleProduct) => {
    const isAlreadyincart = cartProductslist.find((prod) => prod.id === singleProduct.id,)
    if (isAlreadyincart) {
      return toast.warn("product already in cart")
    }
    toast.success("product added to cart")
    setcartProductslist((prevstate) => [
      ...prevstate, singleProduct
    ])
  }

  const singleProductApi = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setsingleProduct(data)
      console.log(data);

    } catch (error) {
      console.log(error.message);

      seterror(error.message);
    }
    finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    singleProductApi()
  }, [id])

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600 border-r-blue-600 shadow-md" />
    </div>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  const { image, title, price, description, category, rating } = singleProduct

  return (

    <div className='grid grid-cols-2 items-center justify-center p-15'>
      <div className='pl-20'>
        <img src={image} alt="" />
      </div>
      <div className='flex flex-col gap-3'>
        <span className='bg-red-400  w-fit text-white font-semibold p-2 rounded text-md'>{category}</span>
        <h3 className='text-xl font-bold'>{title}</h3>
        
        <p className='line-clamp-4'>{description}</p>
        
        <span className='capitalize text-xl font-medium'>Price : ₹{price}</span>

        <button onClick={() => handleAddtoCart(singleProduct)} className="bg-blue-600 text-white px-4 py-2 rounded font-medium cursor-pointer flex items-center gap-1 justify-center">
          <ShoppingCart />
          Add to card
        </button>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Singleproductpage