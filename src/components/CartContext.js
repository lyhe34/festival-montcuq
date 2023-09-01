import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./User/UserContext";

export const CartContext = createContext();

export default function CartContextProvider({children})
{
    const userContext = useContext(UserContext);
    const [cart, setCart] = useState(userContext.user?.cart ?? JSON.parse(localStorage.getItem("temp-cart")) ?? []);
    
    useEffect(() =>
    {
        if(userContext.user)
        {
            userContext.user.cart = cart;
            userContext.setUser({...userContext.user});
        }
        else
        {
            localStorage.setItem("temp-cart", JSON.stringify(cart));    
        }
    }, [cart])

    useEffect(() =>
    {
        if(userContext.user) setCart(userContext.user.cart);
        else setCart(JSON.parse(localStorage.getItem("temp-cart")));
    }, [userContext])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}