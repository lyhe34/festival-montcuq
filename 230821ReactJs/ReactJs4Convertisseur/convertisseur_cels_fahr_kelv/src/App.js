import logo from './logo.svg';
import './App.css';

// >> COMPONENTS >>

import Convertisseur from './Convertisseur'



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav>
          <ul class="nav">

            <li class="navlist"><a href="SayHello.js" >Say Hello</a></li>
            <li class="navlist"><a href="Message.js" >Message</a></li>
            <li class="navlist"><a href="Chrono.js" >Chrono</a></li>
            <li class="navlist"><a href="Hour.js" >Time</a></li>
            <li class="navlist"><a href="MonPanier.js" >Mon Panier</a></li>


          </ul>

        </nav>

        {/* COMPONENTS */}
        <Convertisseur />


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>






        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >



          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
