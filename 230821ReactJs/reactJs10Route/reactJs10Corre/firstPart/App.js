import '../styles/App.css';
import Hello from './Hello';
import Timer from './Timer';
import Fruits from './Fruits';
import But from './But';
import Garage from './Voiture/Garage'
import Compteur from './Compteur';
import Increment from './Increment';
import Chrono from './Chrono'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import Login from './Login';
import Ref from './Ref';
import Shop from './ECommerce/Shop';
import Convertisseur from './Convert/Convertisseur';
import useLocalStorage from './PersonnalHook/useLocalStorage';
import Tasks from './ListTask/Tasks';
import Gallery from './Gallery/Gallery';
import FruitsView from './FruitsView';


function App() {

  const [id, setId] = useLocalStorage('login');
  const [pass, setPass] = useLocalStorage('password');
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/'); // Redirige vers la page d'accueil si l'utilisateur est connecté
    }
  }, [isLogged]);

  const handleLogin = e => {
    const login = e.target.login.value;
    const password = e.target.password.value;
    if (login === 'Nicolas' && password === 'root') {
      setId(login);
      setPass(password);
      setIsLogged(true);
    }
  };

  const handleDisconnect = () => {
    setId(null);
    setPass(null);
    setIsLogged(false);; // Déconnecte l'utilisateur
  };

  return (
    <div className="App">
      <header className="App-header">
      {!isLogged ? (
          <Login onSubmit={handleLogin}/>
      ) : (
        <>
          <Header onClick={handleDisconnect}/>
            <Routes>
              <Route exact path="/" element={<Hello name="Louis"/>} />
              <Route path="/timer/:id" element={<Timer/>} />
              <Route path="/increment" element={<Increment />} />
              <Route path="/compteur" element={<Compteur />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/fruits" element={<Fruits />} />
              <Route path='/fruits/:id' element={<FruitsView />} />
              <Route path="/but" element={<But />} />
              <Route path="/garage" element={<Garage />} />
              <Route path="/chrono" element={<Chrono />} />
              <Route path="/ref" element={<Ref />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/convertisseur" element={<Convertisseur />} />
              <Route path="/listTask" element={<Tasks />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </>
      )}
      </header>

    </div>
  );
}

export default App;
