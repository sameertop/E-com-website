import React, { useContext } from 'react'
import { ScanEye, ShoppingCart, Heart } from "lucide-react"
import { Link } from "react-router-dom";
import ProductContext from '../Context/context';
import { toast } from "react-toastify"




function Wishlistproduct({ productDetails }) {
    const {cartProductslist , setcartProductslist} = useContext(ProductContext)

    const handleAddtocart = (productDetails) => {

        const isProducalreadyincart = cartProductslist.find((prod) => prod.id === productDetails.id);
        if (isProducalreadyincart) {
            return toast.warn("product already in cart")
        }

        toast.success("Product added to cart", { autoClose: 500, position: "top-center" });

        setcartProductslist((prevstate) => [...prevstate, productDetails])

    }

    const { id, title, description, price, image, quantity } = productDetails
    return (
        <div className='border-2  border-slate-300 rounded-md shadow-md m-2'>
            <div className='border-b border-slate-300 py-2'>
                <img className='w-40 h-52 object-contain mx-auto' src={image} alt="" />
            </div>
            <div className='border-t border-slate-300 mt-1 px-2 py-2 flex flex-col gap-2'>
                <h3 className='font-bold text-xl line-clamp-2' >{title}</h3>
                <p className='font-semibold text-gray-700 line-clamp-4'>{description}</p>
                <p className='font-bold'>
                    <span>Price:</span>
                    <span>₹{price}</span>
                </p>
                <div className="flex justify-between ">
                    <Link to={`/product/${id}`} className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded font-medium  flex items-center gap-1 justify-center">
                        <ScanEye />
                        View Details
                    </Link>
                    <button
                        onClick={() => handleAddtocart(productDetails)}
                        className="bg-blue-600 text-white px-4 py-2 rounded font-medium cursor-pointer flex items-center gap-1 justify-center">
                        <ShoppingCart />
                        Add to card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Wishlistproduct