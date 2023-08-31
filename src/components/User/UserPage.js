import { useContext } from "react";
import { useParams } from "react-router";
// import { UserContext } from "../Recup(not_use)/UserContext";
import { Contexte } from "../Contexte";

export default function UserPage()
{
    const userContext = useContext(Contexte);
    const { id } = useParams();
}