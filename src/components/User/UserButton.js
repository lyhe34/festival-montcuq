import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import '../../styles/UserButton.css';

export default function UserButton()
{
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const logout = () =>
    {
        userContext.setUser(null);
        navigate("/");
    }

    return (
        <>
            {
                !userContext.user && 
                <Link to="/user-connexion"><FontAwesomeIcon icon={faUser} className='user-icon' /></Link>
            }
            {
                userContext.user &&
                <div className='dropdown d-flex'>
                    <p>{userContext.user?.name}</p>
                    <div className='user-button-dropdown dropdown-toggle' type="button" data-bs-toggle="dropdown" >
                        <FontAwesomeIcon icon={faUser} className='user-icon' />
                    </div>
                    <ul class="dropdown-menu">
                        <li><Link to="/user" class="dropdown-item">Compte</Link></li>
                        <li><div type="button" class="dropdown-item" onClick={logout}>Déconnexion</div></li>
                    </ul>
                </div>
            }
        </>
    )
}