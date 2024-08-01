import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Poster({
  poster,
  href,
}: {
  poster: string;
  href: string;
}) {
  return (
    <div className={styles.poster}>
      <img src={poster} alt="poster" width={20} />
    </div>
  );
}
