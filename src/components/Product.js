import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
        <div className='col-6'>
            <h1>{props.product.name}</h1>
            <h1>{props.product.price}</h1>
        </div>
    </div>
  )
}
