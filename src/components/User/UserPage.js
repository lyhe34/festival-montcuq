import { useContext } from "react";
import { UserContext } from "./UserContext";
import Header from "../Header";

export default function UserPage()
{
    const userContext = useContext(UserContext);

    return (
        <>
        <Header/>
        </>
    )
}