import UserConnexionPage from "./components/User/UserConnexionPage";
import UserContextProvider from "./components/User/UserContext";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import MapPage from "./components/Map/MapPage";
import UserPage from "./components/User/UserPage";

export default function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

