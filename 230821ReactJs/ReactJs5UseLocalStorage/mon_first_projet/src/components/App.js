
// >>STYLE>>

import logo from '../assets/logo.svg';
import '../styles/App.css';

// <<STYLES<<
// -------------------

// >>COMPONENTS>>

import Hello from './hello';
import Bye from './bye';
import Img from './img';
import Message from './Message';
import Counter from './Counter'
import Chrono from './Chrono';
// import Chronometre from './ChronoHook';
import Hour from './Hour'
// import Counter2 from './Counter2'
import Panier from './MonPanier';

import SayHello from './SayHello';

// import Shop from './Shop';

import Shop from './ShopCorrection';


import Convertisseur from './Convertisseur';

function App() {
  const isVisible = false;
  return (
    <>
    <div className="App">
      <header className="App-header">
        
        <h2>Convertisseur</h2>
        <Convertisseur />

        <Img />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* {
        isVisible ? <Hello/>: <Bye/>
        } */}

        {/* 4>> */}

        {
          <Message />
        }
        {/* <p>{this.props.text }</p> */}

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* 5>> */}
        <Counter />

        {/* 6>> */}
        <Chrono />

        {/* 7>> */}
        <Hour />


        {/* 8>> HOOK */}
        {/* <Counter2/> */}

        <SayHello />



        <Panier />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Shop />







          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
