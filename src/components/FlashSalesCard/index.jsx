import React, { useEffect, useState } from 'react'

function FlashSalesCard() {
    const [product, setProduct] = useState([])
    useEffect(() => {
     fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
     .then((res)=>res.json())
     .then((data)=>setProduct(data))
    }, [])
    
  return (
    <div>
        {product.map((x)=>
        <div className='flashSalesCard'>
        <img src={x.image} />
        <li>{x.name}</li>
        <li>{x.price}</li>
        <li>{x.oldPrice}</li>
        <li>{x.comments}</li>
        <li>{x.persentage}</li>


        </div>)}
    </div>
  )
}

export default FlashSalesCard