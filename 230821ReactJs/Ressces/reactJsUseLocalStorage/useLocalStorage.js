import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key, valeurParDefaut = null) {
    const [valeur, setValeur] = useState(() => {
        try{
            //on vérifie si la valeur est enregistré dans le local
            const sauvegarde = localStorage.getItem(key)

            if(sauvegarde !== null){
                return JSON.parse(sauvegarde)
            }
            // si aucune valeur, return valeur par defaut

            return valeurParDefaut;
        }catch{
            // si erreur je renvoi la valeur par défaut
            return valeurParDefaut;
        }
    })
        // mise à jour du local storage avec useEffect

        useEffect(() => {
            // je converti valeur en JSON
            const valeurJSON = JSON.stringify(valeur)
            localStorage.setItem(key, valeurJSON)
        }, [key, valeur])

        // Je retourne la valeur et la fonction pour modifier la valeur.
        return [valeur, setValeur]
}
