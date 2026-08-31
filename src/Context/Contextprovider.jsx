import React, { useState } from 'react'
import ProductContext from './context'

function Contextprovider({ children }) {

    const [productList, setproductList] = useState(null)
    const [error, seterror] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [cartProductslist, setcartProductslist] = useState([])
    const [wishlistedproduct , setwishlistedproduct] = useState([])

    const [searchbar , setsearchbar] = useState("")

    const fetchProductsApi = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            const updateddata = data.map((prod)=>({...prod,quantity:1}));
            setproductList(updateddata)
            console.log(updateddata);

        } catch (error) {
            console.log(error.message);

            seterror(error.message);
        }
        finally {
            setisLoading(false)
        }
    }
    return (
        <div>
            <ProductContext.Provider
                value={{
                    productList,
                    setproductList,
                    error,
                    seterror,
                    isLoading,
                    setisLoading,
                    cartProductslist,
                    setcartProductslist,
                    fetchProductsApi,
                    searchbar,
                    setsearchbar,
                    wishlistedproduct,
                    setwishlistedproduct,
                   
                }}>
                {children}
            </ProductContext.Provider>

        </div>
    )
}

export default Contextprovider