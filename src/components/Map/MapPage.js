import Header from "../Header";
import Map from "./Map";
import Wiki from '../Wiki';
import Weather from '../Weather';
import DataTime from '../Weather-DataTime/DataTime';

export default function MapPage()
{
    return (
        <>
        <Header/>
        <Wiki/>
        <Map/>
        <DataTime/>
        <Weather/>
        </>
    )
}