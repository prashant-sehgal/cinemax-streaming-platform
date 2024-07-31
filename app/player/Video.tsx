import React, { LegacyRef, SyntheticEvent, useEffect, useState } from "react";
import styles from "./page.module.css";

interface Props {
  videoReference: React.MutableRefObject<HTMLVideoElement | undefined>;
  timelineReference: React.MutableRefObject<HTMLInputElement | undefined>;
  dispatch: Function;
}

export default function Video({
  videoReference,
  timelineReference,
  dispatch,
}: Props) {
  function updateProgress(event: any) {
    // this function will detect the loading progress of the video
    if (event.currentTarget.buffered.length > 0) {
      const bufferedEnd = event.currentTarget.buffered.end(
        event.currentTarget.buffered.length - 1
      );
      const duration = event.currentTarget.duration;
      if (duration > 0) {
        const percentage = (bufferedEnd / duration) * 100;
        dispatch({ type: "updateProgress", payload: Math.round(percentage) });
      }
    }
  }

  function onVideoTimeUpdate(currentTime: number) {
    // this function will run as soon as video current time updayes
    if (!timelineReference.current) return;
    timelineReference.current.value = `${currentTime}`;
    dispatch({ type: "updateCurrentTime", payload: currentTime });
  }

  function onTimeUpdate(event: any) {
    // this function will run as soon as time updare event triggerd on video element
    onVideoTimeUpdate(event.target.currentTime);
    updateProgress(event);
  }

  useEffect(
    //   set video duration into the state as soon as video duration data available
    function () {
      if (!videoReference.current || !videoReference.current.duration) return;
      dispatch({
        type: "updateDuration",
        payload: videoReference.current.duration,
      });
    },
    [videoReference.current]
  );

  return (
    <div className={styles.video}>
      <video
        src="/the-divide.mp4"
        ref={videoReference! as LegacyRef<HTMLVideoElement>}
        onPlay={() => dispatch({ type: "play" })}
        onPause={() => dispatch({ type: "pause" })}
        onTimeUpdate={onTimeUpdate}
        onProgress={updateProgress}
      />
    </div>
  );
}
