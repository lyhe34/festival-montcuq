import React, { useContext, useState } from 'react'
import { Contexte } from '../Contexte'
import CareScale from './CareScale';
import '../../styles/ShoppingCss/Passes.css'

export default function ShoppingList2() {

  const [activeCategory, setActiveCategory] = useState('')

  const { passesList } = useContext(Contexte)

  function addToCart(name, price) {
		const currentAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

  // console.log({passesList})

  return (
    <div>
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


      {/* Affichage des élements celon le trier choisie */}
      <div>
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
              </li>
              <button className='montcuq-button-add' onClick={() => addToCart(item.name, item.price)}>+</button>
            </>
          ) : (null)
        ))}
      </div>



    </div>
  )
}
