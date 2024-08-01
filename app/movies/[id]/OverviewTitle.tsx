import React from "react";
import styles from "./page.module.css";

export default function OverviewTitle({ children }: { children: string }) {
  return <p className={styles.title}>{children}</p>;
}
