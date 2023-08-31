import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
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

	return (
		<div className='montcuq-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='montcuq-pass-list'>
				{plantList.map(({ id, cover, name, light, water,  price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								light={light}
								water={water}
								price={price}
							/>
							<button className = 'montcuq-button-add' onClick={() => addToCart(name, price)}>+</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
