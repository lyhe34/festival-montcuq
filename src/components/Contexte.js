import React, { createContext, useEffect, useState } from 'react' //

export const Contexte = createContext()

export const ContexteProvider = ({ children }) => {

  // const [meteo, setMeteo] = useState([])


  // Fetch meteo 
  //longitue et latitude de la ville   =>  44.33815840047517, 1.2075316856529492
  // https://api.openweathermap.org/data/2.5/weather?lat=44.33815840047517&lon=1.2075316856529492&appid=4b4c17467d5f687283e8bb1facd40137&units=metric

  // const fechData = async () => {

  //   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.33815840047517&lon=1.2075316856529492&appid=4b4c17467d5f687283e8bb1facd40137&units=metric')
  //   const data = await response.json()
  //   setMeteo(data)
  // }



  // useEffect(() => { fechData() }, []);



  // console.log(meteo)

  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.33815840047517&lon=1.2075316856529492&appid=4b4c17467d5f687283e8bb1facd40137&units=metric")
      .then(response => response.json())
      .then(data => setWeather(data));
  }, [])
  useEffect(() => { }, [weather])
  // console.log(weather);



  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
  })


  const data = {
    weather,
    date,
  }

  return (
    // <div>Contexte</div>
    <Contexte.Provider value={data}> {/**meteo */}
      {children}
    </Contexte.Provider>
  )
}
