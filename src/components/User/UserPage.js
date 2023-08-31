import { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "./UserContext";

export default function UserPage()
{
    const userContext = useContext(UserContext);
    const { id } = useParams();
}