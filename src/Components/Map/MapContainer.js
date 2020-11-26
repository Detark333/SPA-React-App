import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { OrderContext } from "СontextAs/OrderContext";
const YOUR_GOOGLE_API_KEY_GOES_HERE = "AIzaSyAqYigWRaOXPk4ukKlbZXDDp_yJzim6-Tk";
const mapContainerStyle = {
  width: "280px",
  height: "300px",
};
const center = {
  lat: 54.31816,
  lng: 48.38379,
};
function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: YOUR_GOOGLE_API_KEY_GOES_HERE,
    libraries: ["places"],
  });
  const markers = [
    {
      lat: 54.316759,
      lng: 48.395268,
      adress: "Ул. Гончарова,15",
    },
    {
      lat: 54.293944,
      lng: 48.373265,
      adress: "Ул. Кирова, 6",
    },
  ];
  const [selected, setSelected] = React.useState(null);
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <OrderContext.Consumer>
      {(context) => (
        <div>
          <h1>3 шаг из 3</h1>
          <h3>Выберете место, где хотите забрать заказ</h3>
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
          >
            {markers.map((marker) => (
              <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelected(marker);
                  context.addAdressInformation(marker);
                }}
              />
            ))}
            {selected ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <h2>Вы выбрали место</h2>
                  <p>{selected.adress}</p>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
      )}
    </OrderContext.Consumer>
  );
}

export default Map;
