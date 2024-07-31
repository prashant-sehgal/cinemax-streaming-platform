import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function MovieCard({
  image,
  title,
  year,
  to,
}: Readonly<{
  image: string;
  title: string;
  year: number;
  to: string;
}>) {
  return (
    <Link href={to} id="link">
      <div className={styles.movieCard}>
        <img src={image} alt="movie-img" />
        <p className={styles.title}>{title}</p>
        <p className={styles.sub}>{year}</p>
      </div>
    </Link>
  );
}
