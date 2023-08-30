import logo from '../assets/logo.svg';
import '../styles/App.css';
import Hello from './hello';
import Bye from './bye'; 
import Img from './img';
import Message from './Message';
import Counter from './Counter';
import Chrono from './Chrono';
import Hour from './Hour'
import Counter2 from './Counter2'
import Panier from './MonPanier'

import SayHello from './SayHello'

function App() {
  const isVisible = false;
  return (
    <div className="App">
      <header className="App-header">


        <h1>mon_first_projet</h1>
        <Img/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* {
        isVisible ? <Hello/>: <Bye/>
        } */}

        {/* 4>> */}
        
        {
          <Message/>
        }
        {/* <p>{this.props.text }</p> */}

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* 5>> */}
        <Counter/>

        {/* 6>> */}
        <Chrono/>

        {/* 7>> */}
        <Hour/>


        {/* 8>> HOOK */}
        <Counter2/>

        <SayHello/>



        <Panier/>
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
