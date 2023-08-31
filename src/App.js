import UserConnexionPage from "./components/User/UserConnexionPage";
import UserContextProvider from "./components/User/UserContext";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import MapPage from "./components/Map/MapPage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/program"></Route>
          <Route path="/reservation"></Route>
          <Route path="/map" element={<MapPage/>}></Route>
          <Route path="/user-connexion" element={<UserConnexionPage/>}></Route>
          <Route path="/user-connexion/:id"></Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
