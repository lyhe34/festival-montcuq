import UserConnexionPage from "./components/UserConnexionPage";
import UserContextProvider from "./components/UserContext";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/user-connexion" element={<UserConnexionPage/>}></Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
