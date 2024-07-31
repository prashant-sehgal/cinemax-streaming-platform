"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  icon,
}: Readonly<{ href: string; icon: string }>) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${styles.navlink}  ${pathname === href ? styles.active : ""}`}
    >
      <img src={icon} alt="nav-icon" />
    </Link>
  );
}
