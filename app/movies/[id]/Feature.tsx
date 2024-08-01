import React from "react";
import styles from "./page.module.css";

export default function Feature({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.feature}>
      <p className={styles.main}>{title}</p>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
