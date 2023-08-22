import React from 'react';

function InputField({ value, onChange }) {
  // Composant InputField pour afficher un champ de saisie numérique
  return (
    <input type="number" value={value} onChange={onChange} />
  );
}

export default InputField;
