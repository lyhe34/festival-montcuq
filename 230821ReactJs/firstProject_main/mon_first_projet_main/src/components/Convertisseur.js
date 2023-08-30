import React, { useState } from 'react';
import ConvertisseurRow from './ConvertisseurRow';

function Convertisseur() {
  // États pour gérer les unités, les valeurs et les changements
  const [unitFrom, setUnitFrom] = useState('C');
  const [unitTo, setUnitTo] = useState('F');
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');
  const [changingFrom, setChangingFrom] = useState(true); // Indique si l'utilisateur modifie l'unité "from"

  // Gère le changement de valeur dans les champs de texte
  const handleValueChange = (event, target) => {
    const newValue = event.target.value;
    if (target === 'from') {
      setValueFrom(newValue);
      setChangingFrom(true);
    } else {
      setValueTo(newValue);
      setChangingFrom(false);
    }
    convertValue(newValue, target);
  };

  // Gère le changement d'unité sélectionnée
  const handleUnitChange = (event, target) => {
    const newUnit = event.target.value;
    if (target === 'from') {
      setUnitFrom(newUnit);
      convertValue(valueFrom, target);
    } else {
      setUnitTo(newUnit);
      convertValue(valueTo, target);
    }
  };

  // Convertit la valeur d'une unité à l'autre
  const convertValue = (value, target) => {
    if (!value) {
      // Réinitialise les deux champs si l'un d'eux est vide
      setValueFrom('');
      setValueTo('');
      return;
    }

    if (changingFrom) {
      // ... (conversion lorsque l'utilisateur change la valeur "from")
      if (unitFrom === 'C' && unitTo === 'F') {
        setValueTo((parseFloat(value) * 9 / 5 + 32).toFixed(2));
      } else if (unitFrom === 'C' && unitTo === 'K') {
        setValueTo((parseFloat(value) + 273.15).toFixed(2));
      } else if (unitFrom === 'F' && unitTo === 'C') {
        setValueTo(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
      } else if (unitFrom === 'F' && unitTo === 'K') {
        setValueTo(((parseFloat(value) - 32) * 5 / 9 + 273.15).toFixed(2));
      } else if (unitFrom === 'K' && unitTo === 'C') {
        setValueTo((parseFloat(value) - 273.15).toFixed(2));
      } else if (unitFrom === 'K' && unitTo === 'F') {
        setValueTo(((parseFloat(value) - 273.15) * 9 / 5 + 32).toFixed(2));
      }
    } else {
      // ... (conversion lorsque l'utilisateur change la valeur "to")
      if (unitTo === 'C' && unitFrom === 'F') {
        setValueFrom((parseFloat(value) * 9 / 5 + 32).toFixed(2));
      } else if (unitTo === 'C' && unitFrom === 'K') {
        setValueFrom((parseFloat(value) + 273.15).toFixed(2));
      } else if (unitTo === 'F' && unitFrom === 'C') {
        setValueFrom(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
      } else if (unitTo === 'F' && unitFrom === 'K') {
        setValueFrom(((parseFloat(value) - 32) * 5 / 9 + 273.15).toFixed(2));
      } else if (unitTo === 'K' && unitFrom === 'C') {
        setValueFrom((parseFloat(value) - 273.15).toFixed(2));
      } else if (unitTo === 'K' && unitFrom === 'F') {
        setValueFrom(((parseFloat(value) - 273.15) * 9 / 5 + 32).toFixed(2));
      }
    }
  };

  // Options d'unités disponibles
  const unitOptions = [
    { value: 'C', label: 'Celsius' },
    { value: 'F', label: 'Fahrenheit' },
    { value: 'K', label: 'Kelvin' },
  ];

  return (
    <div className="converter">
      <h1>Unit Converter</h1>
      {/* Composant ConvertisseurRow pour le champ "From" */}
      <ConvertisseurRow
        label="From"
        unitValue={unitFrom}
        onUnitChange={(e) => handleUnitChange(e, 'from')}
        inputValue={valueFrom}
        onInputChange={(e) => handleValueChange(e, 'from')}
        unitOptions={unitOptions}
      />
      {/* Composant ConvertisseurRow pour le champ "To" */}
      <ConvertisseurRow
        label="To"
        unitValue={unitTo}
        onUnitChange={(e) => handleUnitChange(e, 'to')}
        inputValue={valueTo}
        onInputChange={(e) => handleValueChange(e, 'to')}
        unitOptions={unitOptions}
      />
    </div>
  );
}

export default Convertisseur;
