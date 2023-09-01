import { useContext, useState } from 'react'
import { passesList } from '../datas/PassesList'
import Passes from './Passes'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import { CartContext } from './CartContext'

function ShoppingList() {
	
	const cartContext = useContext(CartContext);

	const [activeCategory, setActiveCategory] = useState('')
	const categories = passesList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	const addToCart = (name, price) => {
		const currentPlantAdded = cartContext.cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cartContext.cart.filter(
				(plant) => plant.name !== name
			)
			cartContext.setCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			cartContext.setCart([...cartContext.cart, { name, price, amount: 1 }])
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
				{passesList.map(({ id, cover, name, light, moon,  price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id} className='montcuq-pass-list-item'>
							<Passes
								cover={cover}
								name={name}
								light={light}
								moon={moon}
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
