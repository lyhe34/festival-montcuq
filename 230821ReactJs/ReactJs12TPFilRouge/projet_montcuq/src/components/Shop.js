import React from 'react'
import Card from './Card'; // Assurez-vous de spécifier le bon chemin vers le fichier Card.js


export default function Shop() {

    // Objectif : 

    // Mettre en place un composant NavBar qui va regrouper 
    // l'ensemble des composants déjà faits sous forme de liens,
    // pas besoin de garder les liens, nous le ferons plus tard.

    // Créer le composant 'Shop' qui stockera l'objet 'produits' et qui sera parent du composant 
    // 'Card' qui, lui, afficher sous forme de carte chaque produit.Créer

    // Utilisation des props et des hooks. 


// return (
//     <div>Shop</div>
// )

const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://picsum.photos/id/0/367/267', // URL de l'image du produit
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      image: 'product2.jpg',
    },
    // ... Ajoutez plus de produits ici
  ];
  
  const Shop = () => {
    return (
      <div className="shop">
        <h1>Shop</h1>
        <div className="card-list">
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

}