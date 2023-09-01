import { useContext } from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from "./CartContext";

export default function CartButton()
{
    const cartContext = useContext(CartContext);

    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} style={{color: "#fff"}} id='cart-icon'/>
        <span style={{color: "#fff"}}>{cartContext.cart.length}</span>
        </>
    )
}