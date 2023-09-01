
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap


import './styles/App.css';  // Import CSS base
import './styles/MeteoCard.css'; // Import CSS affichage card meteo
import './styles/Map.css'; // Import css Map
import './styles/Calendar.css'; // Import css Calendrier
import './styles/DatePicker.css'; // Import css choix date

import './styles/Hero.css'; // Import css HeroBanner
import './styles/UserButton.css';// Import css Connexion
import './styles/UserConnexionPage.css' // Import css page de connexion
import './styles/userForm.css'; // Import css formulaire sign & login


import { ContexteProvider } from './components/Contexte';  // Import contexte --> Déclaré dans index

// Import route
import { Route, Routes } from 'react-router-dom';
// Composants
import Navbar from './components/Navbar'; // Ici la nav est présente pour pouvoir être appliquer à toutes les pages
import UserConnexionPage from './components/User/UserConnexionPage'; // Composant page de connexion
import MapPage from './components/Map/MapPage';
import UserPage from './components/User/UserPage';
import HomePage from './components/HomePage';

// import TestTexte from './components/Programs/TestTexte';   //  ICI LE COMPOSANT sers juste a voir les modife de pages







export default function App() {
  return (
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/program"></Route>
          <Route path="/ticket"></Route>
          <Route path="/map" element={<MapPage/>}></Route>
          <Route path="/user-connexion" element={<UserConnexionPage/>}></Route>
          <Route path="/user" element={<UserPage/>}></Route>
        </Routes>
  );
}

