"use client";

import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  vdoSrc: string;
  isPlaying: boolean;
};

export default function VideoPlayer({
  vdoSrc,
  isPlaying,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isPlaying) {
      const playRequest = video.play();
      playRequest?.catch(() => {
        // Browsers may block autoplay until the visitor interacts with the page.
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <video ref={videoRef} src={vdoSrc} muted loop playsInline>
      Your browser does not support the video element.
    </video>
  );
}
