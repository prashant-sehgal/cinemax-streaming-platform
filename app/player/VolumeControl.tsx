import React, { MouseEventHandler, useEffect } from "react";
import styles from "./page.module.css";
import Button from "./Button";

interface Props {
  volumeLevel: number;
  dispatch: Function;
  videoReference: React.MutableRefObject<HTMLVideoElement | undefined>;
  toggleMute: MouseEventHandler<HTMLButtonElement>;
}

export default function VolumeControl({
  volumeLevel,
  dispatch,
  videoReference,
  toggleMute,
}: Props) {
  const completionPercentile = (volumeLevel / 1) * 100;

  const progressStyle: React.CSSProperties = {
    background: `linear-gradient(to right, #fff 0%, #fff ${completionPercentile}%, #ffffff3a ${completionPercentile}%, #ffffff3a ${
      100 - completionPercentile
    }%)`,
  };

  useEffect(
    function () {
      if (!videoReference.current) return;

      videoReference.current.volume = volumeLevel;
    },
    [volumeLevel]
  );

  return (
    <div className={styles.volumeControl}>
      <Button
        icon={
          volumeLevel === 0
            ? "volume_off"
            : volumeLevel <= 0.5
            ? "volume_down"
            : "volume_up"
        }
        onPress={toggleMute}
      />
      <input
        type="range"
        min={0}
        max={1}
        value={volumeLevel}
        onChange={(event) =>
          dispatch({
            type: "updateVolumeLevel",
            payload: Number(event.target.value),
          })
        }
        style={progressStyle}
        step={0.01}
      />
    </div>
  );
}
