import React, { useRef, useState, useEffect, useCallback } from "react";
import Card from "react-bootstrap/Card";
import WaveSurfer from "wavesurfer.js";
import Hover from "wavesurfer.js/dist/plugins/hover.js";
import styles from "../styles/AudioPlayer.module.css";

// Using Wavesurfer with React. Instructions from: https://wavesurfer.xyz/examples/?react.js
const AudioPlayer = ({ audioUrl, audioName, height = 40 }) => {
  const containerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurfer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
    wavesurfer.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "lightgrey",
      progressColor: "#d939ab",
      url: audioUrl,
      plugins: [
        Hover.create({
          lineColor: "#f0f0f0",
          lineWidth: 2,
          labelBackground: "#f0f0f0",
          labelColor: "#000000",
          labelSize: "12px",
        }),
      ],
      barWidth: 2,
      barGap: 1,
      barRadius: 2,
      height: height,
    });

    wavesurfer.current.on("play", () => setIsPlaying(true));
    wavesurfer.current.on("pause", () => setIsPlaying(false));
    wavesurfer.current.on("timeupdate", (currentTime) => {
      setCurrentTime(currentTime.toFixed(2));
    });

    wavesurfer.current.on("interaction", () => {
      wavesurfer.current.play();
    });

    return () => {
      wavesurfer.current.destroy();
    };
  }, [audioUrl, height]);

  const togglePlay = useCallback(() => {
    if (wavesurfer.current.isPlaying()) {
      wavesurfer.current.pause();
    } else {
      wavesurfer.current.play();
    }
  }, []);

  return (
    <Card className={styles.PlayerContainer}>
      {audioName && <Card.Header className="bg-light">{audioName}</Card.Header>}
      <Card.Body className={styles.AudioPlayer}>
        <span onClick={togglePlay} className={`${styles.Controls} ${height < 50 && styles.ControlsSmall}`}>
          {isPlaying ? <i className="fa-solid fa-circle-pause" aria-label="pause"></i> : <i className="fa-solid fa-circle-play" aria-label="play"></i>}
        </span>
        <div ref={containerRef} className={styles.WaveForm} data-testid="waveform" />
      </Card.Body>
      <Card.Footer className="bg-light text-muted py-1">
        <span className={styles.Time} data-testid="current-time">Playback: {currentTime}s</span>
      </Card.Footer>
    </Card>
  );
};

export default AudioPlayer;
