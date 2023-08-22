import React from 'react';
import InputField from './InputField';
import UnitSelect from './UnitSelect';
import InputLabel from './InputLabel';

function ConvertisseurRow({ label, unitValue, onUnitChange, inputValue, onInputChange, unitOptions }) {
  // Composant ConvertisseurRow qui englobe les éléments de la ligne du convertisseur
  return (
    <div className="converter-row">
      {/* Composant InputLabel pour afficher le libellé (From/To) */}
      <InputLabel label={label} />
      {/* Composant InputField pour l'entrée de valeur */}
      <InputField value={inputValue} onChange={onInputChange} />
      {/* Composant UnitSelect pour la sélection de l'unité */}
      <UnitSelect value={unitValue} options={unitOptions} onChange={onUnitChange} />
    </div>
  );
}

export default ConvertisseurRow;
