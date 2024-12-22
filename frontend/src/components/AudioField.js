import React, { useState, useRef, useEffect, memo } from "react";
import Form from "react-bootstrap/Form";

import styles from "../styles/AudioField.module.css";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../App.module.css";
import Asset from "./Asset";
import AudioPlayer from "./AudioPlayer";

const AudioField = memo(({ sendAudio, previousAudio }) => {
  const [audio, setAudio] = useState(previousAudio?.length ? previousAudio : null);
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
          <AudioPlayer
            audioUrl={audio.length ? audio : URL.createObjectURL(audio)}
            audioName={audio.length ? "" : "Preview: " + audio.name}
          />
          <p className={`${appStyles.SmallText} ms-2`}>
            ⚠️ If your sound is longer than 30 seconds, it will be trimmed to the first 30 seconds. Custom trimming is
            not available at this point.
          </p>

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
});

// Instructions for preventing unnecessary re-renders from:
// https://stackoverflow.com/a/59564675
export default memo(AudioField, (prevProps, nextProps) => prevProps.previousAudio === nextProps.previousAudio);
