import React from "react";
import styles from "../styles/SoundImage.module.css";

const SoundImage = ({ src, height = 50, text }) => {
  return (
    <span className="align-bottom">
      <img className={`${styles.SoundImage} me-2`} src={src} alt="SoundImage" height={height} width={height} />
      <strong className="fs-5">{text}</strong>
    </span>
  );
};

export default SoundImage;
