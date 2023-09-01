import { useContext } from "react"
// import { UserContext } from "../Recup(not_use)/UserContext"
import { Contexte } from "../Contexte";
// import '../../styles/userForm.css';
import { useNavigate } from "react-router";

export default function Sign() {
    const userContext = useContext(Contexte);

    const navigate = useNavigate();

    const sign = (e) => {
        e.preventDefault();

        let name = e.target.user.value;
        let password = e.target.password.value;

        const user =
        {
            name: name,
            password: password,
            cart: []
        }

        if (!localStorage.getItem(name)) {
            localStorage.setItem(name, JSON.stringify(user));

            userContext.setUserContext(user);

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