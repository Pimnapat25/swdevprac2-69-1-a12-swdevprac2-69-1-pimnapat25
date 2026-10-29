"use client";

import { useState } from "react";
import useWindowListener from "@/hooks/useWindowListener";
import VideoPlayer from "./VideoPlayer";
import styles from "./promoteCard.module.css";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);

  useWindowListener("contextmenu", (event) => event.preventDefault());

  return (
    <section className={styles.card} aria-label="Venue promotion">
      <div className={styles.videoWrapper}>
        <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
      </div>
      <div className={styles.content}>
        <h2>Book your venue today.</h2>
        <p>Discover the perfect space for your next memorable occasion.</p>
        <button type="button" onClick={() => setIsPlaying((playing) => !playing)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
}
