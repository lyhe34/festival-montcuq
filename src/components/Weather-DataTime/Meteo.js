// COpie du code de Luc remanier --> pour tenter d'éviter de rajouter des script en rajoutant clé api -- > // import '../styles/Weather.css';// import { translate } from "../scripts/translation";// import { degreeConversion } from "../scripts/degreeConversion";

import { useContext } from "react";
import { Contexte } from "../Contexte";
import DataTime from "./DataTime"; // Import date/heure
import IconWeather from "./IconWeather";

import { Card } from "react-bootstrap";



export default function Weather() {

    const { weather } = useContext(Contexte); 
    

    return (
        <div className=""> {/** */}

            <h2>Météo</h2>
            <div className="container w-75 text-center m-2 p-2">
                {weather &&
                    <Card className="weather">

                        <Card.Header className="p-0" >
                            <Card.Title>~ Bienvenue à {weather.name} ~ </Card.Title> {/** ~ {weather.sys.country} */}

                            <Card.Subtitle className="text-muted"> <DataTime /> </Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Card.Text>
                                <div className="row">
                                    <div className="col">
                                        <IconWeather />
                                        {weather.weather[0].main}
                                    </div>
                                    <div className="col mt-5 ">
                                        <h2 className="">{weather.main.temp} °C</h2>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                }
            </div>
        </div>
    )
}