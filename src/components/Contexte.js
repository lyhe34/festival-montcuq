import React, { createContext, useEffect, useState } from 'react' //

export const Contexte = createContext()

export const ContexteProvider = ({ children }) => {

  // Weather Context 
  const [weather, setWeather] = useState();
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.33815840047517&lon=1.2075316856529492&appid=4b4c17467d5f687283e8bb1facd40137&units=metric")
      .then(response => response.json())
      .then(data => setWeather(data));
  }, [])
  useEffect(() => { }, [weather])
  // console.log(weather);


  // Date + Hour Context 
  const [date, setDate] = useState(new Date())
  useEffect(() => {
      setInterval(() => {
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


  // Renvoie
  return (
    // <div>Contexte</div>
    <Contexte.Provider value={{weather, date, userContext, setUserContext}}>
      {children}
    </Contexte.Provider>
  )
}
