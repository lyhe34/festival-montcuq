import React, { useContext, useEffect, useState } from 'react'
import { Contexte } from '../Contexte'

export default function CartRework() {

    const { cart } = useContext(Contexte)
    const { updateCart } = useContext(Contexte)

    const total = cart.map((item) => item.name + item.price + item.ammount, 0)

    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        if (cart.length > 0) {
            setIsOpen(true)
        }
    }, [cart.length])

    return (

        isOpen === true ? (
            <div>
                <div className='montcuq-cart'>
                    <button className='montcuq-cart-toggle-button' onClick={() => setIsOpen(false)}> Fermer </button>

                    {cart.length >= 0 ? (
                        <div>
                            <h2>Panier</h2>
                            <ul>
                                {cart.map((item) => (<div>{item.name} {item.price}€ x {item.amount}</div>))}
                            </ul>
                            <h3>Total :{total}€</h3>
                            <button className="montcuq-cart-empty-button" onClick={() => updateCart([])}>Vider le panier</button>
                        </div>
                    ) : (console.log(cart))}






                </div>
            </div>
        ) : (<div>Votre panier est vide</div>)



    )
}
