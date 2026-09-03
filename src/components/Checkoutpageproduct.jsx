import React, { useContext } from 'react'
import ProductContext from '../Context/context'

function Checkoutpageproduct({productDetails}) {  
    const {image, title, price, quantity ,description} = productDetails  
  return (
    <div>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>price:{price}</p>
        </div>
        <div>

        </div>

    </div>
  )
}

export default Checkoutpageproduct