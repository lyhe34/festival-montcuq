import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Header()
{
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid justify-content-around">
                    <a className="navbar-brand text-white" href="#">Festival</a>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item text-white">1</li>
                        <li className="nav-item text-white">2</li>
                        <li className="nav-item text-white">3</li>
                    </ul>
                    <a href='#'><FontAwesomeIcon icon={faUser} className='user-icon'/></a>
                </div>
            </nav>
        </header>
    )
}