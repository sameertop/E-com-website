import React, { useContext } from 'react'
import CartProductCard from '../components/Cardproduct'
import ProductContext from '../Context/context'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const { cartProductslist } = useContext(ProductContext)

  const totalProductquantity = cartProductslist.reduce((total, product) => {
    return total + product.quantity
  }, 0)

  const totalPayableamt = cartProductslist.reduce((total, product) => {
    return total + (product.quantity * product.price)
  }, 0)

  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div className='grid grid-cols-[2.5fr_1fr]'>
      <div className='h-screen overflow-y-auto scrollbar-thin'>
        {
          cartProductslist.length <= 0 ? (
            <div className="space-y-4 w-fit mx-auto py-8">
              <div>
                <h2 className='text-3xl font-bold'>Yout Cart is Empty</h2>
              </div>
              <Link className='px-2 py-3 bg-red-400 text-white rounded-md font-semibold ' to={"/product"}>
                Plz Checkout The Product
              </Link>
            </div>
          ) : (
            cartProductslist.map((productDetails) => {
              return (
                <CartProductCard
                  key={productDetails.id}
                  productDetails={productDetails}
                />
              )
            })
          )
        }
      </div>
      <div className="my-8 px-4 text-[18px] space-y-2">
        <div className="flex justify-between items-center ">
          <span>Total Product</span>
          <span className="font-medium"> {cartProductslist.length} </span>
        </div>
        <div className="flex justify-between items-center ">
          <span>Total Product quantity</span>
          <span className="font-medium">{totalProductquantity}</span>
        </div>
        <div className="flex justify-between items-center ">
          <span>Delivery Charges</span>
          <span className="font-medium line-through">₹50</span>
        </div>
        <div className="border border-slate-200" />
        <div className="flex justify-between items-center ">
          <span className="font-semibold text-xl">Total Amount</span>
          <span className="font-medium">₹ {(Number(totalPayableamt).toLocaleString("en-IN"))}  </span>
        </div>
        <div>
          < button onClick={handleCheckout} className=" cursor-pointer bg-green-600 text-white font-semibold w-full mt-8 px-4 py-2 rounded ">
            Checkout
          </button>
        </div>
      </div>

    </div>
  )
}

export default Cart