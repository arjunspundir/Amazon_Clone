import React from 'react'
import './ComponentStyle/Products/mid.css'
import './ComponentStyle/Products/small.css'
import './ComponentStyle/Products/large.css'

function Products({
  price,
  image,
  statement,
  cls
}) {
  return (
    
    <div className={cls}>
      <div className="statement">
        {statement}
      </div>
      <div className={cls==='small'|| cls==='mid'?'image':'lgimage'}>
        <img src={image} alt="oops! something went wrong" />
      </div>
      <div className="price">
       $ {price}
      </div>
      <button>Add to cart</button>
    
    </div>
  )
}

export default Products
