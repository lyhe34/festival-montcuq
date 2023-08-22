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