import React from "react";
import styles from "./page.module.css";

interface Props {
  id: number;
  children: React.JSX.Element;
}

export default function Slide({ children, id }: Props) {
  return (
    <div className={styles.slide} id={`slide-${id}`}>
      {children}
    </div>
  );
}
