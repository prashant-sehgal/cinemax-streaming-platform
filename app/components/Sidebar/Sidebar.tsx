import React from "react";
import styles from "./page.module.css";
import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink href="/search" icon="/icons/search.png" />
      <NavLink href="/" icon="/icons/home.png" />
      <NavLink href="/movies" icon="/icons/movie.png" />
      <NavLink href="/kids" icon="/icons/puzzle.png" />
      <NavLink href="/profile" icon="/icons/user.png" />
    </div>
  );
}
