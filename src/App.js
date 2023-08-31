import UserConnexionPage from "./components/UserConnexionPage";
import UserContextProvider from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UserConnexionPage/>
      </UserContextProvider>
    </div>
  );
}

export default App;
