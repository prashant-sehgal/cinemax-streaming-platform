import React, { MouseEventHandler } from "react";
import styles from "./page.module.css";

interface Props {
  id: number;
  currentActiveSlide: number;
  onPress: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ currentActiveSlide, id, onPress }: Props) {
  return (
    <button
      className={`${styles.button} ${
        currentActiveSlide === id ? styles.active : ""
      }`}
      id={`button-${id}`}
      onClick={onPress}
    />
  );
}
