import React, { useContext } from "react";
import ProductContext from "../Context/context";
import Wishlistproduct from "../components/Wishlistproduct";

function Wishlist() {
    const { wishlistedproduct } = useContext(ProductContext);

    return (
        <div>
            {wishlistedproduct.length <= 0 ? (
                <div>
                    <h1 className="text-2xl font-bold text-center p-10">Wishlist is empty</h1>
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-5 p-6">
                    {wishlistedproduct.map((productDetails) => {
                        return (
                            <Wishlistproduct
                                key={productDetails.id}
                                productDetails={productDetails}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Wishlist;