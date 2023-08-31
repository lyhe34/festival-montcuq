import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../../styles/Map.css'

export default function Map()
{
    return (
        <div className="map-container">
            <div className='map'>
                <MapContainer center={[44.3386424106028, 1.2094860823701028]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[44.3386424106028, 1.2094860823701028]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}