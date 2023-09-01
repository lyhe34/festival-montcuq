import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Contexte } from '../Contexte';
// import useLocalStorage from './useLocalStorage'
import '../../styles/UserButton.css';

export default function UserButton() {
    const userContext = useContext(Contexte);

    // const [loggedUser, setLoggedUser] = useLocalStorage()

    const logout = () => {
        userContext.setUserContext(undefined)
    }

    return (
        <>

            {userContext.user=== undefined ? (
                <Link to="/user-connexion"><FontAwesomeIcon icon={faUser} className='user-icon' /></Link>  
            ) : (
            <div className='user-button-container dropdown'>
                <p>{userContext.user.name}</p>
                <div className='user-button-dropdown dropdown-toggle' type="button" data-bs-toggle="dropdown" >
                    <FontAwesomeIcon icon={faUser} className='user-icon' />
                </div>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item">Compte</Link></li>
                    <li><div type="button" class="dropdown-item" onClick={logout}>Déconnexion</div></li>
                </ul>
            </div>)
            }


        </>
    )
}