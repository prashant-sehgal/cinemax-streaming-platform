import React from "react";
import styles from "./page.module.css";

interface Props {
  children: React.JSX.Element[];
}

export default function Controls({ children }: Props) {
  return <div className={styles.controls}>{children}</div>;
}
