
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap


import './styles/App.css';  // Import CSS base
import './styles/MeteoCard.css'; // Import CSS affichage card meteo
import './styles/Map.css'; // Import css Map
import './styles/Calendar.css'; // Import css Calendrier
import './styles/DatePicker.css'; // Import css choix date

import './styles/Hero.css'; // Import css HeroBanner
import './styles/userCss/UserButton.css';// Import css Connexion
import './styles/userCss/UserConnexionPage.css' // Import css page de connexion
import './styles/userCss/userForm.css'; // Import css formulaire sign & login



import { ContexteProvider } from './components/Contexte';// Import contexte --> Déclaré dans App 

import { Route, Routes } from 'react-router-dom'; // Import route


// Composants
import Navbar from './components/Navbar'; // Ici la nav est présente pour pouvoir être appliquer à toutes les pages
import Accueil from './components/Accueil/Accueil';  // Composant qui regroupe tous les liens de la navigation
import Meteo from './components/Weather-DataTime/Meteo';  // Composant Meteo
import Map from './components/ComeOn/Map';  // Composant map
import Calendar from './components/Programs/Calendar';  // Composant Calendrier

import UserConnexionPage from './components/User/UserConnexionPage'; // Composant page de connexion



// Import shop
// import ShoppingList from '../src/components/Shopping/ShoppingList'; 
// import Cart from '../src/components/Panier/Cart.js';


// IMPORT TEST SHOP
import ShoppingList from './components/Shopping/ShoppingList_ReworkContexte';
import CartRework from './components/Shopping/CartRework';


// import TestTexte from './components/Programs/TestTexte';   //  ICI LE COMPOSANT sers juste a voir les modife de pages







export default function App() {
  return (
    
    <ContexteProvider>
      <div className="Corpus">
        <header>
          <Navbar/>
        </header>


        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/meteo' element={<Meteo/>}/>
          <Route path='/map' element={<Map/>} />
          <Route path='/programs/calendar' element={<Calendar/>}/>
          {/* <Route path='/billeterie' element={<ShoppingList/>}/> */}

          <Route path='/billeterie' element={<ShoppingList/>}/>


          <Route path='/billeterie/panier' element={<CartRework/>}/>

          <Route path='/user-connexion' element={<UserConnexionPage/>}/>




          {/* <Route path='/programs' element={<TestTexte/>}/> */}
        </Routes>

      </div>
     </ContexteProvider>
  );
}

