import { useState, useContext } from 'react'
import '../styles/Cart.css'
import { CartContext } from './CartContext';

export default function Cart() {
	const [isOpen, setIsOpen] = useState(true)

	const cartContext = useContext(CartContext);

	const total = () =>
	{
		return cartContext.cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0);
	}

	return (
		<>
		{ isOpen ? <div className='montcuq-cart'>
			<button className='montcuq-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
			<div>
				<h2>Panier</h2>
				{ cartContext.cart.length ?  
				<>
				<ul>
					{cartContext.cart.map(({ name, price, amount }, index) => (
						<div key={`${name}-${index}`}>
							{name} {price}€ x {amount}
						</div>
					))}
				</ul>
				<h3>Total :{total()}€</h3> 
				</>
				: <p>Votre panier est vide</p> }
				<button className="montcuq-cart-empty-button" onClick={() => cartContext.setCart([])}>Vider le panier</button>
			</div>
		</div> :
		<div className='montcuq-cart-closed'>
			<button className='montcuq-cart-toggle-button' onClick={() => setIsOpen(true)}><img src={require('../assets/icon-trolley-cart-add.png').default} alt='' />Panier</button>
		</div> }
		</>
	)
}
