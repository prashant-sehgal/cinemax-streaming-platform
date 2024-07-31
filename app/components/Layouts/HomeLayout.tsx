import React from "react";
import styles from "./page.module.css";
import Logo from "../Logo";
import Sidebar from "../Sidebar/Sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.homeLayout}>
      <Logo color="#fff" size={35} />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.page}>{children}</div>
      </div>
    </div>
  );
}
