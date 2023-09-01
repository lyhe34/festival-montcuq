
import { Route, Routes } from 'react-router-dom';
import UserConnexionPage from './components/User/UserConnexionPage';
import MapPage from './components/Map/MapPage';
import UserPage from './components/User/UserPage';
import HomePage from './components/HomePage';

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

