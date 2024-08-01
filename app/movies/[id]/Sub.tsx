import React from "react";
import styles from "./page.module.css";

export default function Sub({
  duration,
  year,
  age,
}: {
  duration: number;
  year: number;
  age: number;
}) {
  return (
    <p className={styles.sub}>
      <span>{year}</span> <span>|</span> <span>2h 23 min</span>
      <span>|</span>
      <span>{age}+</span>
    </p>
  );
}
