import { useEffect, useState } from "react";
import '../styles/Weather.css';
import { degreeConversion } from "../scripts/degreeConversion";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weather()
{
    const [weather, setWeather] = useState();

    useEffect(() =>
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Montcuq&appid=2ec2d74ef78f42fe1b782003f257c02c")
        .then(response => response.json())
        .then(data => setWeather(data));
    }, [])

    return (
        <div className="weather-container">
            {weather && 
                <div className="weather">
                    <img className="pe-5" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                    <div className="d-flex align-items-center pe-3">
                        <FontAwesomeIcon icon={faTemperatureHalf} size="4x" color="red"/>
                        <p className="m-0 ps-3 fs-3 text-white">{degreeConversion(weather.main.temp, 'kelvin', 'celsius')} °C</p>
                    </div>
                </div>
            }
        </div>
    ) 
}