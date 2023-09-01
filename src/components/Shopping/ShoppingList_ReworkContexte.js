import React, { useContext, useState } from 'react'
import { Contexte } from '../Contexte'
import CareScale from './CareScale';
import '../../styles/ShoppingCss/Passes.css'
import '../../styles/ShoppingCss/ShoppingList.css'
import '../../styles/ShoppingCss/Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import CartRework from './CartRework';


export default function ShoppingList() {

  const [activeCategory, setActiveCategory] = useState('')

  const { passesList } = useContext(Contexte) // console.log({passesList})

  const { cart } = useContext(Contexte)
  const { updateCart } = useContext(Contexte)

  function addToCart(name, price) {
    const currentAdded = cart.find((item) => item.name === name)
    if (currentAdded) {
      const cartFilteredCurrent = cart.filter((item) => item.name !== name);
      updateCart([...cartFilteredCurrent, { name, price, amount: currentAdded.amount + 1 }]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }



  return (
    <div className='container w-50 justify-content-center' >
      {/* Ici ajoute du composant catégorie */}
      <div className='montcuq-categories'>

        <select className='montcuq-categories-select' value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>

          <option value=""> ~ Trier ~ </option>
          {passesList.map((item) => (
            <option onClick={() => setActiveCategory(item.category)} value={item.category} >{item.category}</option>
          ))}{/** key={cat}*/}
        </select>

        <button className='montcuq-button-reinit' onClick={() => setActiveCategory('')}>Réinitialiser</button>
      </div>

      <div className='container w-50'>
        {/* Affichage des élements celon le trier choisie */}
        <div className=''>
          {passesList.map((item) => (
            !activeCategory || activeCategory === item.category ? (
              <>
                <li className='montcuq-item' > {/**onClick={() => handleClick(name)} */}
                  <span className='montcuq-item-price'>{item.price}€</span>
                  <img className='montcuq-item-cover' src={item.cover} alt={`${item.name} cover`} />
                  {item.name}
                  <span className='care-scales'>
                    <CareScale careType='light' scaleValue={item.light} />
                    <CareScale careType='moon' scaleValue={item.moon} />
                  </span>
                  <button className='montcuq-button-add btn' onClick={() => addToCart(item.name, item.price)}>+</button>
                </li>
              </>
            ) : (null)
          ))}
        </div>
      </div>
      <CartRework />

    </div>
  )
}
