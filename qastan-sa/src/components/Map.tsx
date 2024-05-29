import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import customIcon from "../img/marker.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent: React.FC = () => {
  const position: [number, number] = [50.8371, 3.2776];

  let customMarkerIcon = L.icon({
    iconUrl: customIcon,
    iconSize: [40, 60],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }} attributionControl={false} className="z-30" scrollWheelZoom={false}>
      <TileLayer url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}" id="mapbox/outdoors-v12" accessToken="pk.eyJ1Ijoic2FsbWEwNCIsImEiOiJjbGg1ejA0cWkwMHp2M2RtcXBqaGhheXZqIn0.XURmzTwlDcpDzNPssuXGMg" tileSize={512} zoomOffset={-1} />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          <div>
            <h2>Adres:</h2>
            <p>Brugsesteenweg 48, 8520 Kuurne</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
