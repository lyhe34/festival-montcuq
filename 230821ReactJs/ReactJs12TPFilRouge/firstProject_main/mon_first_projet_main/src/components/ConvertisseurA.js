import React, {useEffect} from 'react'

export default function Convertisseur() {

    /*
    
    Créer un convertisseur d'unités de température
    
    Un composant pour les entrées et un pour les résultats
    Possibilité de changer d'unité, Celsius, Fahrenheit, Kelvin
    
    
    Un composant de base 
    qui va envoyer un composant input
    faire le choix entre fahr et cels
    */

    return (
        <>
            <div>
                <input type="number" />
                <select>
                    <option value="Celsius">Celsius</option>
                </select>

            </div>
            <div>=</div>
            <div>
                 <input type="number" />
                <select>
                <option value="fahrenheit">Fahrenheit</option>
            </select>
            </div>
        </>


    )
}
