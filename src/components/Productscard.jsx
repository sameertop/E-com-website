import React, { useContext } from 'react'
import { ScanEye, ShoppingCart, Heart } from "lucide-react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import ProductContext from '../Context/context';


function Productscard({ productDetails }) {

    const { image, id, title, price, description, category, rating, quantity } = productDetails
    const { cartProductslist, setcartProductslist, wishlistedproduct, setwishlistedproduct } = useContext(ProductContext)

    const handleAddtocart = (productDetails) => {

        const isProducalreadyincart = cartProductslist.find((prod) => prod.id === productDetails.id);
        if (isProducalreadyincart) {
            return toast.warn("product already in cart")
        }

        toast.success("Product added to cart", { autoClose: 500, position: "top-center" });

        setcartProductslist((prevstate) => [...prevstate, productDetails])

    }


    // for red heart button
    const isinwishlist = wishlistedproduct.some((prod) => prod.id === productDetails.id)


    // 
    const handleWishlist = (productDetails) => {

        const isProductWishlist = wishlistedproduct.some(
            (prod) => prod.id === productDetails.id
        );

        if (isProductWishlist) {

            setwishlistedproduct((prev) =>
                prev.filter((prod) => prod.id !== productDetails.id)
            );

            toast.info("Product removed from wishlist", {
                autoClose: 500,
                position: "top-center"
            });

        } else {

            setwishlistedproduct((prev) => [
                ...prev,
                productDetails
            ]);

            toast.success("Product added to wishlist", {
                autoClose: 500,
                position: "top-center"
            });
        }
    };

    return (
        <div className='border-2 relative border-slate-300 rounded-md shadow-md m-2'>
            <div className='border-b border-slate-300 py-2'>
                <img className='w-40 h-52 object-contain mx-auto' src={image} alt="" />
                <button onClick={() => handleWishlist(productDetails)}>    <Heart
                    className={`absolute top-2 right-2 ${isinwishlist ? "text-red-500 fill-red-500" : "text-gray-500"
                        }`}
                    size={30}
                    strokeWidth={1.75}
                /></button>
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

export default Productscard;