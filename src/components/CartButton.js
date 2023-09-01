import { useContext } from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from "./User/UserContext";

export default function CartButton()
{
    const userContext = useContext(UserContext);

    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} style={{color: "#fff"}} id='cart-icon'/>
        <span>{userContext?.cart?.length}</span>
        </>
    )
}