import React, { useEffect } from "react";
import styles from "./page.module.css";

interface Props {
  children: React.JSX.Element[];
  reference: React.MutableRefObject<HTMLDivElement | undefined>;
  dispatch: Function;
}

export default function Player({ children, reference, dispatch }: Props) {
  useEffect(
    function () {
      if (!reference.current) return;

      function handleFullscreenChange() {
        dispatch({ type: "toggleFullscreen" });
      }

      reference.current.addEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );

      return () =>
        reference.current?.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
    },

    [reference]
  );

  return (
    <div
      className={styles.player}
      ref={reference! as React.LegacyRef<HTMLDivElement>}
    >
      {children}
    </div>
  );
}
