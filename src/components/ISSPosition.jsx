import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { FaSpaceShuttle } from "react-icons/fa";
import React, { useMemo } from "react";
import "../styles/mksPosition.css";

const Station = () => {
  return (
    <div className="circle">
      <FaSpaceShuttle />
    </div>
  );
};

function ISSPosition({ long, lang }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCQjeq974aUXPJmmvbgEYsS2JoMIjK_GgI",
  });

  const render = useMemo(() => {
    return (
      <div id="mksPosition">
        <h2>
          Примерное местоположение МКС на высоте 410км относительно поверхности
          планеты
        </h2>
        {!isLoaded ? <p>Loading...</p> : <Map lon={long} lngs={lang} />}
      </div>
    );
  }, [long]);

  return <>{render}</>;
}
function Map({ lon, lngs }) {
  const position = {
    lat: +lngs,
    lng: +lon,
  };

  return (
    <GoogleMap zoom={6} center={position} mapContainerClassName="map-container">
      <Station />
    </GoogleMap>
  );
}
export default ISSPosition;
