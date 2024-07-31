"use client";

import React, { useEffect, useReducer, useRef } from "react";
import Logo from "../components/Logo";
import Button from "./Button";
import { Action, State } from "./Types";
import Video from "./Video";
import Timeline from "./Timeline";
import Title from "./Title";
import Header from "./Header";
import Overlay from "./Overlay";
import ControlsContainer from "./ControlsContainer";
import Controls from "./Controls";
import Player from "./Player";
import VolumeControl from "./VolumeControl";

const initial: State = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volumeLevel: 1,
  progress: 0,
  isFullscreen: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "pause":
      return { ...state, isPlaying: false };

    case "play":
      return { ...state, isPlaying: true };

    case "updateCurrentTime":
      return { ...state, currentTime: action.payload };

    case "updateDuration":
      return { ...state, duration: action.payload };

    case "updateVolumeLevel":
      return { ...state, volumeLevel: action.payload };

    case "updateProgress":
      return { ...state, progress: action.payload };

    case "toggleFullscreen":
      return { ...state, isFullscreen: !state.isFullscreen };

    default:
      throw new Error("Unknown Action");
  }
}

export default function page() {
  const [
    { isPlaying, currentTime, duration, volumeLevel, progress, isFullscreen },
    dispatch,
  ] = useReducer(reducer, initial);

  const playerReference = useRef<HTMLDivElement>();
  const videoReference = useRef<HTMLVideoElement>();
  const timelineReference = useRef<HTMLInputElement>();

  function togglePlay() {
    // toggle video play/pause
    if (!videoReference.current) return;

    videoReference.current.paused
      ? videoReference.current.play()
      : videoReference.current.pause();
  }

  function forward10Seconds() {
    // forward video by 10 seconds
    if (!videoReference.current) return;
    videoReference.current.currentTime += 10;
  }

  function replay10Seconds() {
    // forward video by 10 seconds
    if (!videoReference.current) return;
    videoReference.current.currentTime -= 10;
  }

  function toggleMute() {
    volumeLevel === 0
      ? dispatch({ type: "updateVolumeLevel", payload: 1 })
      : dispatch({ type: "updateVolumeLevel", payload: 0 });
  }

  function toggleFullscreen() {
    if (!playerReference.current) return;

    if (!document.fullscreenElement)
      playerReference.current.requestFullscreen();
    else document.exitFullscreen();
  }

  useEffect(
    function () {
      // keyboard shortcuts hook
      function handleKeypress(event: KeyboardEvent) {
        switch (event.key.toLocaleLowerCase()) {
          // shortcut for play/pause
          case "k":
            return togglePlay();

          // shortcut for forward 10 seconds
          case "l":
            return forward10Seconds();

          // shortcut for replay 10 seconds
          case "j":
            return replay10Seconds();

          // shortcut for toggle mute
          case "m":
            return toggleMute();

          // shortcut for toggle fullscreen
          case "f":
            return toggleFullscreen();

          default:
            break;
        }
      }
      document.addEventListener("keypress", handleKeypress);

      return () => document.removeEventListener("keypress", handleKeypress);
    },
    [togglePlay, forward10Seconds]
  );

  return (
    <Player reference={playerReference} dispatch={dispatch}>
      <Overlay isPlaying={isPlaying}>
        <Header>
          <Logo color="#fff" size={25} />
          <Button icon="close" onPress={() => ""} />
        </Header>
        <ControlsContainer>
          <Title>The Divide</Title>
          <Controls>
            <Button
              icon={isPlaying ? "pause" : "play_arrow"}
              onPress={togglePlay}
            />
            <Button icon="forward_10" onPress={forward10Seconds} />

            <VolumeControl
              volumeLevel={volumeLevel}
              dispatch={dispatch}
              videoReference={videoReference}
              toggleMute={toggleMute}
            />

            <Timeline
              videoReference={videoReference}
              timelineReference={timelineReference}
              currentTime={currentTime}
              duration={duration}
              progress={progress}
            />

            <Button
              icon={isFullscreen ? "fullscreen_exit" : "fullscreen"}
              onPress={toggleFullscreen}
            />
          </Controls>
        </ControlsContainer>
      </Overlay>

      <Video
        videoReference={videoReference}
        timelineReference={timelineReference}
        dispatch={dispatch}
      />
    </Player>
  );
}
