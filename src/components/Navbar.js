import React from 'react'
import Logo_1 from '../assets/Logo_1.png'

import { Link } from 'react-router-dom'

export default function Navbar() {

    return (

        <nav className='navbar '>
            <div className='container px-4 '>
                <img src={Logo_1} className='Logo' alt='Logo' />
                <div className='navbar-collapse '>
                    {/* Bouton burger en cas de petit écran */}
                    {/* <button className='navbar-toggler' type='button'
                        data-bs-toggle="collapse" data-bs-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button> */}


                    <ul className='navbar-nav me-auto m-2 ms-lg-4 App-navBar'>

                        <li className='nav-item'><Link to="/"><div  className='nav-link'>Accueil</div></Link></li>
                        <li className='nav-item'><Link to="/programs/calendar"><div>Programme</div></Link></li>
                        
                        <li className='nav-item'><Link to="/billeterie"><div>Billetterie</div></Link></li> 
                        <li className='nav-item'><div>Guest</div></li>
                        <li className='nav-item'><div>Réservation</div></li>
                        <li className='nav-item'><Link to="/map"><div>Comment venir ?</div></Link></li> 

                        {/* Meteo est placer pour test en attendant de le mettre sur acceuil ou autre*/}
                        <li className='nav-item'><Link to="/meteo"><div className='nav-link'>Préparez Séjour</div></Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
