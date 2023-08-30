import { useEffect, useState } from "react";
import '../styles/Weather.css';
import { translate } from "../scripts/translation";
import { degreeConversion } from "../scripts/degreeConversion";

export default function Weather()
{
    const [weather, setWeather] = useState();

    useEffect(() =>
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Montcuq&appid=2ec2d74ef78f42fe1b782003f257c02c")
        .then(response => response.json())
        .then(data => setWeather(data));
    }, [])

    useEffect(() =>
    {
        console.log(weather);
    }, [weather])

    return (
        <div className="weather-container">
            {weather && 
                <div className="weather">
                    <h2>Météo</h2>
                    <p>{translate(weather.weather[0].main)}</p>
                    <p>{degreeConversion(weather.main.temp, 'kelvin', 'celsius')} °C</p>
                </div>
            }
        </div>
    ) 
}