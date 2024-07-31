import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

interface Props {
  to: string;
  image: string;
}

export default function MovieSlide({ to, image }: Props) {
  return (
    <div className={styles.container}>
      <img src={image} alt="movie-poster" className={styles.image} />
      <Link href={to}>
        <button className={styles.button}>Watch Now</button>
      </Link>
    </div>
  );
}
