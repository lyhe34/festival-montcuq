import Login from "./components/Login";
//import Map from "./components/Map";
import Sign from "./components/Sign";
import UserContextProvider from "./components/UserContext";
//import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Login/>
        <Sign/>
      </UserContextProvider>
    </div>
  );
}

export default App;
