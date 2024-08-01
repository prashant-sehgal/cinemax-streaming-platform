import React from "react";
import styles from "./page.module.css";

export default function Description({ children }: { children: string }) {
  return <div className={styles.description}>{children}</div>;
}
