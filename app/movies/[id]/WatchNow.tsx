import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

export default function WatchNow({ href }: { href: string }) {
  return (
    <Link href={href}>
      <button className={styles.watchNowButton}>Watch Now</button>
    </Link>
  );
}
