import React from "react";
import styles from "./page.module.css";

interface Props {
  onPress: React.MouseEventHandler<HTMLButtonElement>;
  icon: string;
}

export default function Button({ onPress, icon }: Props) {
  return (
    <button className={styles.button} onClick={onPress}>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
