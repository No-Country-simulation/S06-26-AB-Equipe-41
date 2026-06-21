import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

export default function MapSection() {
  return (
    <div className="map-card">
      <h3>Mapa de Inclusão Digital</h3>

      <MapContainer
        center={[-12.576, 13.405]}
        zoom={6}
        style={{
          height: '500px',
          width: '100%'
        }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[-12.576, 13.405]}
          icon={icon}
        >
          <Popup>
            Lobito
            <br />
            Cobertura de Rede: 78%
          </Popup>
        </Marker>

        <Marker
          position={[-12.776, 15.739]}
          icon={icon}
        >
          <Popup>
            Huambo
            <br />
            Cobertura de Rede: 62%
          </Popup>
        </Marker>

        <Marker
          position={[-8.838, 13.234]}
          icon={icon}
        >
          <Popup>
            Luanda
            <br />
            Cobertura de Rede: 91%
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
