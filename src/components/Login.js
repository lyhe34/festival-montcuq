import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Login()
{
    const userContext = useContext(UserContext);

    const login = (e) =>
    {
        e.preventDefault();
        
        let user = e.target.user.value;
        let password = e.target.password.value;

        if(localStorage?.getItem(user) === password)
        {
            userContext.setUser(user);
            console.log(useContext.user);
        }
    }

    return (
        <form>
            <label onSubmit={(e) => login(e)}>Nom</label>
            <input type="text"></input>
            <label>Mot de passe</label>
            <input type="password"></input>
            <button type="submit">Se connecter</button>
        </form>
    )
}