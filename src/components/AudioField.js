import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";

import styles from "../styles/AudioField.module.css";
import btnStyles from "../styles/Button.module.css";
import Asset from "./Asset";

const AudioField = ({ sendAudio }) => {
  const [audio, setAudio] = useState(null);
  const audioInput = useRef(null);
  const [audioChanged, setAudioChanged] = useState(false);

  useEffect(() => {
    if (audioChanged) {
      sendAudio(audio);
      setAudioChanged(false);
    }
  }, [audio, audioChanged, sendAudio]);

  const handleChangeAudio = (e) => {
    if (e.target.files.length) {
      setAudio(e.target.files[0]);
      setAudioChanged(true);
    }
  };

  return (
    <Form.Group>
      {audio ? (
        <>
          {audio.name}

          <div className="d-flex align-items-center">
            <Form.Label
              className={`${styles.AudioUpload} ${btnStyles.YellowButton} ${btnStyles.Small} btn`}
              htmlFor="audio-upload"
            >
              Change audio
            </Form.Label>
          </div>
        </>
      ) : (
        <Form.Label className={`${styles.AudioUpload} d-flex justify-content-center`} htmlFor="audio-upload">
          <Asset icon="fa-solid fa-file-arrow-up" message="Click or tap to upload an audio file" layout="column" />
        </Form.Label>
      )}

      <Form.Control
        className="d-none"
        type="file"
        id="audio-upload"
        accept="audio/*"
        onChange={handleChangeAudio}
        ref={audioInput}
      />
    </Form.Group>
  );
};

export default AudioField;
