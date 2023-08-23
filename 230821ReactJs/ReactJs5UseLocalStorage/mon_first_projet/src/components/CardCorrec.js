import React from 'react'

export default function CardCorrec(produit) {

    const {nom, description, price} = produit
  return (
    <div>
        <h2>{nom}</h2>
        <p>{description}</p>
        <b>{price}</b>
        
    </div>
  )
}
