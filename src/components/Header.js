import '../styles/Header.css';
import UserButton from './UserButton';

export default function Header()
{
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid justify-content-around">
                    <p className="navbar-brand text-white">Festival</p>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item text-white">Accueil</li>
                        <li className="nav-item text-white">Programme</li>
                        <li className="nav-item text-white"></li>
                    </ul>
                    <UserButton/>
                </div>
            </nav>
        </header>
    )
}