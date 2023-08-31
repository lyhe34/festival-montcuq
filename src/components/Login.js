import { useContext } from "react";
import { UserContext } from "./UserContext";
import '../styles/userForm.css';

export default function Login()
{
    const userContext = useContext(UserContext);

    const login = (e) =>
    {
        e.preventDefault();
        
        let name = e.target.name.value;
        let password = e.target.password.value;

        const user = JSON.parse(localStorage.getItem(name));

        if(user.password === password)
        {
            userContext.setUser(user);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={(e) => login(e)}>
            <label>Nom</label>
            <input type="text" name="name"></input>
            <label>Mot de passe</label>
            <input type="password" name="password"></input>
            <button type="submit">Se connecter</button>
            </form>
        </div>
    )
}