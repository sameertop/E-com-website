import React, { useContext } from 'react'
import ProductContext from '../Context/context'
import Checkoutpageproduct from '../components/Checkoutpageproduct'

function Checkoutpage() {

  const { cartProductslist } = useContext(ProductContext)
  return (
    <div>
      {cartProductslist.map((productDetails) => {
      return  <Checkoutpageproduct key={productDetails.id} productDetails={productDetails} />
      })}
    </div>
  )
}

export default Checkoutpage