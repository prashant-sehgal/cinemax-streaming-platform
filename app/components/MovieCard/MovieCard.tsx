import React from "react";
import styles from "./page.module.css";

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
    <div className={styles.movieCard}>
      <img src={image} alt="movie-img" />
      <p>{title}</p>
      <p>{year}</p>
    </div>
  );
}
