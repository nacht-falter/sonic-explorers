import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Pane } from "react-leaflet";
import styles from "../../styles/Map.module.css";

import { axiosRequest } from "../../api/axiosDefaults";
import MapPopup from "./MapPopup";
import { Spinner } from "react-bootstrap";

const Map = () => {
  const [sounds, setSounds] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchSounds = async () => {
      try {
        const { data } = await axiosRequest.get("/sounds/");
        let counter = 2;
        let next = data.next;
        while (next) {
          const { data: moreData } = await axiosRequest.get(`/sounds/?page=${counter}`);
          data.results.push(...moreData.results);
          counter++;
          next = moreData.next;
        }
        setSounds(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSounds();
  }, []);

  return (
    <MapContainer className={styles.Map} center={[24, 3]} zoom={2} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {hasLoaded ? (
        sounds.results.map((sound) => (
          <Marker key={sound.id} position={[sound.latitude, sound.longitude]}>
            <Popup className={styles.Popup} minWidth={300}>
              {" "}
              <MapPopup {...sound} />
            </Popup>
          </Marker>
        ))
      ) : (
        <div className={styles.SpinnerOverlay}>
          <Spinner />
        </div>
      )}
    </MapContainer>
  );
};

export default Map;
