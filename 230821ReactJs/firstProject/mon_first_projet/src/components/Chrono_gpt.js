// CLASSES>> 
/* ENglobe tout

import React, { Component } from 'react';

class Chrono extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(0),
      isRunning: false,
    };

    this.interval = null;
  }

  start = () => {
    if (!this.state.isRunning) {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          time: new Date(prevState.time.getTime() + 1000),
          isRunning: true,
        }));
      }, 1000);
    }
  };

  pause = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  reset = () => {
    clearInterval(this.interval);
    this.setState({
      time: new Date(0),
      isRunning: false,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.time.toISOString().substr(11, 8)}</div>
        {this.state.isRunning ? (
          <button onClick={this.pause}>Pause</button>
        ) : (
          <button onClick={this.start}>Start</button>
        )}
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default Chrono;



// HOOK>>


import React, { useState, useEffect } from 'react';

function Chronometre() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Chronomètre</h1>
      <p>{seconds} secondes</p>
      <button onClick={handleToggle}>
        {isActive ? 'Pause' : 'Démarrer'}
      </button>
      <button onClick={handleReset}>Réinitialiser</button>
    </div>
  );
}

export default Chronometre;




// cCHRONO . CORREC 

function Chronometre () {
    const[seconds, setSEconds] = useState(0)
    const[intervalId, setIntervalId] = useState(null)

    const start = () => {
        if (!intervalId){
            const id = setInterval(() => {
                setSeconds(sec =>sec+1)
            }, 1000)
            setIntervalId(id);

            }
        }

        const pause = () => {
            if (intervalId){
                clearInterval(intervalId)
                setIntervalId (null)
            }
        }
    }

}


*/