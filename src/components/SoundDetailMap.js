import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import styles from "../styles/SoundDetailMap.module.css";

const SoundDetailMap = ({ sound }) => {
  const location = sound.location;

  return (
    <MapContainer className={styles.Map} center={location} zoom={6} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker key={sound.id} position={location}></Marker>
    </MapContainer>
  );
};

export default SoundDetailMap;
