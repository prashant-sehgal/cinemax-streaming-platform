import React from "react";
import styles from "./page.module.css";

export default function Overview({ children }: { children: React.ReactNode }) {
  return <div className={styles.overview}>{children}</div>;
}
