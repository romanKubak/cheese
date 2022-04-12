import React from 'react'

export default function Product({product}) {
  return (
    <div>

<div className="card" style={{width: '18rem'}}>
  <img src={product.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{product.price}</li>
  </ul>
</div>

    </div>
  )
}
