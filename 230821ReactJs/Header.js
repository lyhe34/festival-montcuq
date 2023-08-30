import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './MyContext';


function Header({onClick}) {
    const {handleToggle} = useContext(MyContext)
    return (
        <nav className='nav'>
            <Link to="/"><button>Accueil</button></Link>
            <Link to="/timer"><button>Timer</button></Link>
            <Link to="/compteur"><button>Compteur</button></Link>
            <Link to="/but"><button>But</button></Link>
            <Link to="/increment"><button>Increment</button></Link>
            <Link to="/fruits"><button>Fruits</button></Link>
            <Link to="/garage"><button>Garage</button></Link>
            <Link to="/chrono"><button>Chrono</button></Link>
            <Link to="/ref"><button>Ref</button></Link>
            <Link to="/shop"><button>Shop</button></Link>
            <Link to="/convertisseur"><button>Convertisseur</button></Link>
            <Link to="/listTask"><button>Tâches</button></Link>
            <Link to="/gallery"><button>Galerie</button></Link>
            <Link to="/article"><button>Blog</button></Link>
            <Link to="/testContext"><button>Context</button></Link>
            <input type='checkbox' onClick={handleToggle}/>
            <Link to="/"><button onClick={onClick}>Se deconnecter</button></Link>
        </nav>
    );
}

export default Header;