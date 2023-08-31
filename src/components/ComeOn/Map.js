import { MapContainer, TileLayer, Marker, Popup,  } from 'react-leaflet'


export default function Map()
{
    const position = [44.3386424106028, 1.2094860823701028]

    return (
        <div className="container">
            <div className='map'>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}