import React from 'react';

function UnitSelect({ value, options, onChange }) {
  // Composant UnitSelect pour afficher une liste déroulante d'unités
  return (
    <select value={value} onChange={onChange}>
      {/* Parcourt les options fournies et crée une option pour chacune */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default UnitSelect;
