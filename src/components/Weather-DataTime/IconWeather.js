import React, { useContext } from 'react'
import { Contexte } from '../Contexte'

export default function IconWeather() {

    const {weather} =  useContext(Contexte)
    const actualWeather = weather.weather[0].icon
    const urlStart = 'https://openweathermap.org/img/wn/'
    const urlEnd = '@2x.png'

    const url =`${urlStart}${actualWeather}${urlEnd}`     

    // console.log(weather.weather[0].icon)

  return (
    <img src={url} alt='Icon meteo'/>
  )
}
