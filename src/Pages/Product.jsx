import React, { useContext, useEffect, useState } from 'react'
import Productscard from '../components/Productscard'
import Productskeleton from '../components/Productskeleton'
import ProductContext from '../Context/context'

function Product() {
  const { searchbar } = useContext(ProductContext)
  
  const {
    productList,
    isLoading,
    error,
    fetchProductsApi,
  } = useContext(ProductContext);


  useEffect(() => {
    fetchProductsApi()
  }, [])

  if (isLoading) {
    return (
      <div className='grid grid-cols-4 gap-5 p-6'>
        {
          Array(20).fill(null).map((ele, index) => {
            return <Productskeleton key={index} />
          })
        }
      </div>
    )
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className='p-6 grid grid-cols-4 gap-3'>
      {
        productList.filter((p)=>p.title.toLowerCase().includes(searchbar.toLowerCase()) ||  p.description.toLowerCase().includes(searchbar.toLowerCase() ))
          .map((productDetails) => {
            return <Productscard key={productDetails.id} productDetails={productDetails} />
          })
      }
    </div>
  )
}

export default Product