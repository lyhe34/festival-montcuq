
import { Route, Routes } from 'react-router-dom';
import UserConnexionPage from './components/User/UserConnexionPage';
import MapPage from './components/Map/MapPage';
import UserPage from './components/User/UserPage';
import HomePage from './components/HomePage';
import TicketPage from './components/TicketPage';
import { ContexteProvider } from './components/Contexte';
import UserContextProvider from './components/User/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <ContexteProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/program"></Route>
            <Route path="/ticket" element={<TicketPage/>}></Route>
            <Route path="/map" element={<MapPage/>}></Route>
            <Route path="/user-connexion" element={<UserConnexionPage/>}></Route>
            <Route path="/user" element={<UserPage/>}></Route>
          </Routes>
        </ContexteProvider>
      </UserContextProvider>
  );
}

