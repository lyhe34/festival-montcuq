import React, { useState } from "react";


export default function Panier() {

    //     Créer un panier de fruits / un tableau avec des éléments dans le panier. 
    // Afficher les éléments dans le DOM
    // Ajouter un formulaire pour ajouter des élémnts dans le panier 


    const [fruits, setFruits] = useState(['Pomme', 'Banane', 'Poire']) // Hook contenant le tableau initial

    const [fruit, setFruit] = useState() //hook pour l'ajout

    const handleSubmit = (e) => { // Au click du bouton ajouter, je déclenche 
        e.preventDefault();
        setFruits([...fruits, fruit]); // 
        setFruit('');// remet à 0 initial
        // key=.  quand on parcourt !!

    }

    // Fonction de suppression de l'élément 

    const handleDelete = (index) => {
        const updateFruits = [...fruits];
        updateFruits.splice(index, 1);
        setFruits(updateFruits)
    }

    return (
        <>
            <h1>Dans mon panier</h1>
            <ul> {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}</ul>
            {/* Je parcours mon tableau fruits en transformant chaque occurence en liste */}
            <form onSubmit={handleSubmit}>
                <input onChange={e => setFruit(e.target.value)} />
                <button>Ajouter</button>
            </form>
        </>

    )

}