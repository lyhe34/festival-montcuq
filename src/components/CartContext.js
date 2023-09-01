import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({children})
{
    const savedCart = localStorage.getItem('cart')
	const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}