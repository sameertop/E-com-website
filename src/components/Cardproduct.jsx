import { Minus, Plus, Trash2 } from "lucide-react";
import React, { useContext } from "react";
import ProductContext from "../Context/context";

function CartProductCard({ productDetails }) {
  const { id, title, description, price, image, quantity } = productDetails

  const { cartProductslist, setcartProductslist } = useContext(ProductContext)

  const handleRemoveItem = (id) => {
    const Modifieddata = cartProductslist.filter((prod) => prod.id !== id);
    setcartProductslist(Modifieddata)
  };

  const handleIncreament = (id) => {
    const modifieddata = cartProductslist.map((p) => {
      return p.id == id && p.quantity < 50 ? { ...p, quantity: p.quantity + 1 } : p
    });
    setcartProductslist(modifieddata)
  }

  const handleDecreament = (id) => {
    const modifieddata = cartProductslist.map((p) => {
      return p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
    });
    setcartProductslist(modifieddata)
  }
  return (
    <div className="grid grid-cols-[0.5fr_1fr_0.5fr] gap-x-2 m-4 items-center shadow max-sm:grid-cols-1">
      <div className="h-52">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={`${title} image`}
        />
      </div>
      <div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold"> {title} </h2>
          <p className="text-slate-700 text-sm max-sm:line-clamp-3">
            {description}
          </p>
          <span className="capitalize">
            price :<span className="font-medium text-xl">₹{price} </span>
          </span>
        </div>
      </div>
      <div className="space-y-2.5 flex flex-col  items-center max-sm:flex-row max-sm:gap-4 max-sm:justify-center max-sm:py-2 max-sm:space-y-0">
        <div className="flex items-center">
          <button onClick={() => handleDecreament(id)} className="bg-blue-600 text-white p-2 rounded cursor-pointer duration-200 active:scale-105">
            <Minus />
          </button>
          <span className="px-2 text-xl font-semibold border border-slate-100">
            {quantity}
          </span>
          <button onClick={() => handleIncreament(id)} className="bg-blue-600 text-white p-2 rounded cursor-pointer duration-200 active:scale-105">
            <Plus />
          </button>
        </div>
        <div>
          <button onClick={() => handleRemoveItem(id)} className="bg-red-600  text-white p-2  cursor-pointer duration-200 active:scale-105 px-4 py-2 rounded font-medium flex items-center gap-1">
            <Trash2 />
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
