import { useContext } from "react";
// import { UserContext } from "../Recup(not_use)/UserContext";
import { Contexte } from "../Contexte";
// import '../../styles/userForm.css';
import { useNavigate } from "react-router";
// import { Alert } from "react-bootstrap";



export default function Login() {
    const userContext = useContext(Contexte);

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        let name = e.target.name.value;
        let password = e.target.password.value;

        const user = JSON.parse(localStorage.getItem(name));

        if (user.password === password) {
            userContext.setUserContext(user);

            navigate("/");
        }else {
            // return (
            //    <Alert className="alert">
            //     <p>Retry</p>
            //    </Alert>
            // )
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