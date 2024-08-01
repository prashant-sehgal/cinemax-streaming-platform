import React from "react";
import styles from "./page.module.css";

export default function Details({ children }: { children: React.ReactNode }) {
  return <div className={styles.details}>{children}</div>;
}
