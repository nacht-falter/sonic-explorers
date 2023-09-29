import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 50, text }) => {
  return (
    <span className="align-middle">
      <img className={`${styles.AvatarImage} me-2`} src={src} alt="Avatar" height={height} width={height} />
      {text}
    </span>
  );
};

export default Avatar;
