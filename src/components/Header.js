import { Link } from 'react-router-dom';
import '../styles/Header.css';
import UserButton from './User/UserButton';
import Logo_1 from '../assets/Logo_1.png'

export default function Header()
{
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid justify-content-center">
                    <div className='navbar-brand-container d-flex justify-content-center'>
                        <Link to="/" className="navbar-brand text-white d-flex justify-content-center align-items-center"><img src={Logo_1} className='Logo' alt='Logo'/></Link>
                    </div>
                    <ul className="navbar-nav d-flex flex-row justify-content-center">
                        <Link className="nav-item text-white">Programme</Link>
                        <Link className="nav-item text-white">Réserver</Link>
                        <Link to="/map" className="nav-item text-white">Plan</Link>
                    </ul>
                    <div className='user-button-container d-flex justify-content-center'>
                        <UserButton/>
                    </div>
                </div>
            </nav>
        </header>
    )
}