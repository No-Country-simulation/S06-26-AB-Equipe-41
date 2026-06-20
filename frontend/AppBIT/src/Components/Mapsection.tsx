import './Mapsection.css'

export default function MapSection() {
  return (
    <div className="map-card">
      <h2 className="map-card-title">Mapa de Inclusão Digital</h2>
      
      <div className="map-wrapper">
        <img
           src="/angola.png.png"
           alt="Mapa de Angola"
           className="map-image"
        />
      </div>
    </div>
  )
}