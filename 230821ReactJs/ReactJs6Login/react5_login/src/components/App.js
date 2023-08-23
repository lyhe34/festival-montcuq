import '../styles/App.css';
import logo from '../assets/logo.svg';


import Message from './Message';
import Counter from './Counter';
import Chronometre from './Chronometre';
import Hour from './Hour';
import SayHello from './SayHello';
import Panier from './Panier';
import Shop from './Shop';
import Ref from './Ref';
import useLog from './useLog';
import Login from './Login';

import useLocalStorage from './useLocalStorage';

function App() {

  const monTexte = "Je fais du ReactJS"

  useLog("Mon message")

  const [id, setId] = useLocalStorage('login')
  const [pass, setPass] = useLocalStorage('password')
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false)

  const handleSubmit = e => {
    const login = e.target.login.value
    const password = e.target.password.value
    if (login === 'id' && password === 'mdp') {
      setId(login)
      setPass(password)
      setIsLogged(true)
    }
  }


  return (
    <div className="App">
      <header className="App-header">

        {!isLogged ? (
          <Login onSubmit={handleSubmit} />
        ) : (
          <>
            <Logo />
            <SayHello />
            <Message text={monTexte} />
            <Counter />
            <Chronometre />
            <Hour />
            <Panier />
            <Shop />
            <Ref />
          </>

        )}

      </header>
    </div>
  );
}

export default App;
