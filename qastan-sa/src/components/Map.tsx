import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent: React.FC = () => {
  const position: [number, number] = [50.8371, 3.2776];

  return (
    <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }} attributionControl={false}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        id="mapbox/streets-v11"
        accessToken="pk.eyJ1Ijoic2FsbWEwNCIsImEiOiJjbGg1ejA0cWkwMHp2M2RtcXBqaGhheXZqIn0.XURmzTwlDcpDzNPssuXGMg"
        tileSize={512}
        zoomOffset={-1}
        attribution=""
      />
      <Marker position={position}>
        <Popup>
          Brugsesteenweg 48, 8520 Kuurne
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
