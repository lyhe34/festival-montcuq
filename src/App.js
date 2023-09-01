
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


// import { ContexteProvider } from "./Component/Contexte";  // Import contexte --> Déclaré dans index

// Import route
import { Route, Routes } from 'react-router-dom';


// Composants
import Navbar from './components/Navbar'; // Ici la nav est présente pour pouvoir être appliquer à toutes les pages
import Accueil from './components/Accueil/Accueil';  // Composant qui regroupe tous les liens de la navigation
import Meteo from './components/Weather-DataTime/Meteo';  // Composant Meteo
import Map from './components/ComeOn/Map';  // Composant map
import Calendar from './components/Programs/Calendar';  // Composant Calendrier

import UserConnexionPage from './components/User/UserConnexionPage'; // Composant page de connexion


// import TestTexte from './components/Programs/TestTexte';   //  ICI LE COMPOSANT sers juste a voir les modife de pages







export default function App() {
  return (
    
    // <ContexteProvider>
      <div className="Corpus">
        <header>
          <Navbar/>
        </header>


        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/meteo' element={<Meteo/>}/>
          <Route path='/map' element={<Map/>} />
          <Route path='/programs/calendar' element={<Calendar/>}/>

          <Route path='/user-connexion' element={<UserConnexionPage/>}/>




          {/* <Route path='/programs' element={<TestTexte/>}/> */}
        </Routes>

      </div>
    // </ContexteProvider>
  );
}

