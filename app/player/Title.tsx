import React from "react";
import styles from "./page.module.css";

interface Props {
  children: string;
}

export default function Title({ children }: Props) {
  return (
    <div className={styles.title}>
      <p>You're watching</p>
      <h1>{children}</h1>
    </div>
  );
}
