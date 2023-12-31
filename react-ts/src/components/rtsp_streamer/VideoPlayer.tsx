import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const RTSPStream: React.FC<VideoFeedProps> = ({ src }) => {
  const videoRef = useRef(null)
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>()

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      setPlayer(
        videojs(videoElement, {}, () => {
          console.log("player is ready");
        })
      );
    }
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  return (
    <div>
      <video className="video-js w-full h-96" ref={videoRef} controls>
        <source src={src} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

interface VideoFeedProps {
  src: string;
}