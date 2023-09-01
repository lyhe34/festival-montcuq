import React, { createContext, useEffect, useState } from 'react' //


//  Import image pour ShopList
import pass_un_j from '../assets/ShoppingAssets/pass_un_j.jpg'
import pass_deux_j from '../assets/ShoppingAssets/pass_deux_j.jpg'
import pass_trois_j from '../assets/ShoppingAssets/pass_trois_j.jpg'
import pass_trois_jours_bivouac from '../assets/ShoppingAssets/pass_trois_jours_bivouac.jpg'
import pass_quatre_jours_bivouac from '../assets/ShoppingAssets/pass_quatre_jours_bivouac.jpg'
import pass_deux_jours_bivouac from '../assets/ShoppingAssets/pass_deux_jours_bivouac.jpg'


export const Contexte = createContext()

export const ContexteProvider = ({ children }) => {



  // Weather Context 
  const [weather, setWeather] = useState();
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.33815840047517&lon=1.2075316856529492&appid=4b4c17467d5f687283e8bb1facd40137&units=metric")
      .then(response => response.json())
      .then(data => setWeather(data));
  }, [])
  useEffect(() => { }, [weather])// console.log(weather);



  // Date + Hour Context 
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date())
    }, 1000);//  console.log(interval)
  })


  // Users Context
  const [userContext, setUserContext] = useState();
  useEffect(() => {
    const u = localStorage.getItem("loggedUser");
    if (u !== "undefined") {
      setUserContext(JSON.parse(u))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(userContext));
  }, [userContext])



  // Shop Context

  const passesList = [ // Produits
    { name: 'Pass 1 jour', category: 'Scène 1 J', id: '1ed', bestSale: true, light: 1, moon: 0, cover: pass_un_j, price: 35 },
    { name: 'Pass 2 jours', category: 'Scène 2 J', id: '2ab', light: 2, moon: 0, cover: pass_deux_j, price: 55 },
    { name: 'Pass 3 Jours', category: 'Scène 3 J', id: '3sd', light: 1, moon: 0, cover: pass_trois_j, price: 75 },
    { name: 'Pass 2 Jours + Bivouac', category: 'Scène + Bivouac 2J / 1N', id: '4kk', light: 2, moon: 1, cover: pass_deux_jours_bivouac, price: 75 },
    { name: 'Pass 3 Jours + Bivouac', category: 'Scène + Bivouac 3J / 2N', id: '5pl', light: 3, moon: 2, cover: pass_trois_jours_bivouac, price: 95 },
    { name: 'Pass 4 Jours + Bivouac', category: 'Scène + Bivouac 4J / 3N', id: '7ie', bestSale: true, light: 2, moon: 3, cover: pass_quatre_jours_bivouac, price: 125 },
  ]

  // Panier Context

  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])





  // Context send
  const data = {
    weather,
    date,
    userContext,
    setUserContext,
    passesList,
    cart,
    updateCart,
  }



  // Renvoie
  return (
    // <div>Contexte</div>
    <Contexte.Provider value={data}>
      {children}
    </Contexte.Provider>
  )
}
