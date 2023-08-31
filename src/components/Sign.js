import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Sign()
{
    const userContext = useContext(UserContext);

    const sign = (e) =>
    {
        e.preventDefault();

        let user = e.target.user.value;
        let password = e.target.password.value;

        console.log(user);
        console.log(password);

        if(!localStorage.getItem(user))
        {
            localStorage.setItem(user, password);

            userContext.setUser(user);
        }
    }

    console.log(userContext.user);

    return (
        <form onSubmit={(e) => sign(e)}>
            <label>Nom</label>
            <input type="text" name="user"></input>
            <label>Mot de passe</label>
            <input type="password" name="password"></input>
            <button type="submit">S'inscrire</button>
        </form>
    )
}