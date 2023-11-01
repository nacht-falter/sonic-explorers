import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "../../styles/Map.module.css";

import Form from "react-bootstrap/Form";

import { axiosRequest } from "../../api/axiosDefaults";
import MapPopup from "./MapPopup";
import Spinner from "react-bootstrap/Spinner";

const Map = () => {
  const [sounds, setSounds] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchSounds = async () => {
      setHasLoaded(false);
      try {
        const { data } = await axiosRequest.get(`/sounds/?search=${query}`);
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
        // console.log(err);
      }
    };

    if (query) {
      const queryTimer = setTimeout(() => {
        fetchSounds();
      }, 1000);
      return () => clearTimeout(queryTimer);
    } else {
      fetchSounds();
    }
  }, [query]);

  return (
    <MapContainer className={styles.Map} center={[0, 0]} zoom={2} scrollWheelZoom={true}>
      <div className={styles.SearchOverlay}>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Filter sounds by name, tags, or user"
          />
        </Form>
      </div>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {hasLoaded ? (
        sounds.results.map((sound) => (
          <Marker key={sound.id} position={[sound.latitude, sound.longitude]}>
            <Popup className={styles.Popup} minWidth={300}>
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
