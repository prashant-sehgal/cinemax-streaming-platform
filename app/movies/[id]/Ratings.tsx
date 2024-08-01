import React from "react";
import styles from "./page.module.css";

export default function Ratings({ children }: { children: string }) {
  return (
    <div className={styles.ratings}>
      <img src="/imdb-logo.webp" alt="IMDB" />
      <p>{children}⭐</p>
    </div>
  );
}
