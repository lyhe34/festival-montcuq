import { useContext } from "react"
import { UserContext } from './UserContext';
import { useNavigate } from "react-router";

export default function Sign() {
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const sign = (e) => {
        e.preventDefault();

        let name = e.target.user.value;
        let password = e.target.password.value;

        const user =
        {
            name: name,
            password: password,
            cart: localStorage.getItem("temp-cart") === null ? JSON.parse(localStorage.getItem("temp-cart")) : []
        }

        if (!localStorage.getItem(name)) 
        {
            localStorage.setItem(name, JSON.stringify(user));

            userContext.setUser(user);

            navigate("/");
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={(e) => sign(e)}>
                <label>Nom</label>
                <input type="text" name="user" id="user"></input>
                <label>Mot de passe</label>
                <input type="password" name="password" id="password"></input>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}