import React, { useRef, useState, useEffect, useCallback } from "react";
import Card from "react-bootstrap/Card";
import WaveSurfer from "wavesurfer.js";
import Hover from "https://unpkg.com/wavesurfer.js@7/dist/plugins/hover.esm.js";
import styles from "../styles/AudioPlayer.module.css";

// Using Wavesurfer with React. Instructions from: https://wavesurfer.xyz/examples/?react.js
const AudioPlayer = ({ audioUrl, audioName }) => {
  const containerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurfer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "rgb(200, 0, 200)",
      progressColor: "rgb(100, 0, 100)",
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
      height: 75,
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
  }, [audioUrl]);

  const togglePlay = useCallback(() => {
    if (wavesurfer.current.isPlaying()) {
      wavesurfer.current.pause();
    } else {
      wavesurfer.current.play();
    }
  }, []);

  return (
    <Card>
      {audioName && <Card.Header>{audioName}</Card.Header>}
      <Card.Body className={styles.AudioPlayer}>
        <span onClick={togglePlay} className={styles.Controls}>
          {isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        </span>
        <div ref={containerRef} className={styles.WaveForm} />
      </Card.Body>
      <Card.Footer className="text-muted py-1">
        <span className={styles.Time}>Playback: {currentTime}s</span>
      </Card.Footer>
    </Card>
  );
};

export default AudioPlayer;
