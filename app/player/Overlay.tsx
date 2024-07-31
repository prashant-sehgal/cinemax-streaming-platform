import React, { LegacyRef, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";

interface Props {
  children: React.JSX.Element[];
  isPlaying: boolean;
}

export default function Overlay({ children, isPlaying }: Props) {
  const overlayReference = useRef<HTMLDivElement>();
  const [overlayVisible, setOverlayVisible] = useState(true);
  let overlayTimeout: NodeJS.Timeout;

  const componentClasses = classNames({
    [styles.overlay]: true,
    [styles.overlayVisible]: !isPlaying,
    [styles.overlayInvisible]: !overlayVisible,
    [styles.disableCursor]: !overlayVisible,
  });

  function resetOverlayTimeout() {
    clearTimeout(overlayTimeout);

    overlayTimeout = setTimeout(function () {
      setOverlayVisible(false);
    }, 2000);
  }

  useEffect(
    function () {
      if (!isPlaying) setOverlayVisible(true);
      else resetOverlayTimeout();
    },
    [isPlaying]
  );

  useEffect(
    function () {
      // this hook will detect the mouse move and make overlay visible and also invisble when mouse not move for about 2000 miliseconds
      if (!overlayReference.current) return;

      function handleMouseMove() {
        if (!isPlaying) return;

        setOverlayVisible(true);
        resetOverlayTimeout();
      }

      overlayReference.current.addEventListener("mousemove", handleMouseMove);

      return () => {
        overlayReference.current?.removeEventListener(
          "mousemove",
          handleMouseMove
        );
        clearTimeout(overlayTimeout);
      };
    },
    [overlayReference, isPlaying]
  );

  return (
    <div
      className={componentClasses}
      ref={overlayReference! as LegacyRef<HTMLDivElement>}
    >
      {children}
    </div>
  );
}
