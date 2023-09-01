import { useContext } from "react";
import Header from "../Header";
import { UserContext } from "./UserContext";

export default function UserPage()
{
    const userContext = useContext(UserContext);

    return (
        <>
        <Header/>
        <p>{userContext.user.name}</p>
        { userContext.user.cart.length && userContext.user.cart.map(i => <p></p>) }
        </>
    )
}