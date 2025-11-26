import { MapContainer, TileLayer, Marker, Popup, useMap as useLeafletMap } from "react-leaflet";
import { useEffect } from "react";



// const API_KEY = "at_NRrw5z1AF3Qtq5EE2B72VJnUTc1AH";

function MapUpdater({ position }) {
  const map = useLeafletMap();

  useEffect(() => {
    map.setView([position.lat, position.lng], map.getZoom()); 
  }, [position, map]);

  return null; 
}

function MapView({ position }){ 
  
  // const position = [51.505, -0.09] 
  
  return(
    <MapContainer
      center={[position.lat, position.lng]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position.lat, position.lng]}>
        <Popup>
          This is a popup!
        </Popup>
      </Marker>
      <MapUpdater position={position} />
    </MapContainer>
  );
}

export default MapView;

