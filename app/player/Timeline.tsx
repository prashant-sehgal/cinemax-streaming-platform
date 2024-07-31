import React, { LegacyRef } from "react";
import styles from "./page.module.css";

interface Props {
  videoReference: React.MutableRefObject<HTMLVideoElement | undefined>;
  timelineReference: React.MutableRefObject<HTMLInputElement | undefined>;
  currentTime: number;
  duration: number;
  progress: number;
}

export default function Timeline({
  videoReference,
  timelineReference,
  currentTime,
  duration,
  progress,
}: Props) {
  const completionPercentile = (currentTime / duration) * 100;

  const progressStyle: React.CSSProperties = {
    background: `linear-gradient(to right, 
    #fff 0%, 
    #fff ${completionPercentile}%, 
    #ffffff70 ${completionPercentile}%, 
    #ffffff70 ${progress}%, 
    #ffffff3a ${progress}%, 
    #ffffff3a ${100 - progress}%)`,
  };

  function onTimelineUpdate(newTime: number) {
    // this function will run as when user scroll throught the timeline
    if (!videoReference.current) return;
    videoReference.current.currentTime = newTime;
  }

  return (
    <div className={styles.timeline}>
      <p>{formatTime(currentTime)}</p>
      <input
        ref={timelineReference! as LegacyRef<HTMLInputElement>}
        type="range"
        min={0}
        max={duration}
        defaultValue={0}
        step={0.001}
        onChange={(event) => onTimelineUpdate(Number(event.target.value))}
        style={progressStyle}
      />
      <p>{formatTime(duration)}</p>
    </div>
  );
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) - 60 * hours;
  const secs = Math.floor(seconds % 60);

  return `${hours ? `${hours}:` : ""}${
    minutes < 10 && hours > 0 ? "0" : ""
  }${minutes}:${secs < 10 ? 0 : ""}${secs}`;
}
