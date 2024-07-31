"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [arr, setArr] = useState<number[]>([]);
  return (
    <main className={styles.main}>
      <p>Home Page</p>
    </main>
  );
}
