import styles from "@/styles/components/navbar.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <p className={styles.navbarLogo}>A.</p>
      <button
        className={styles.navbarMenuButton}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={`${styles.burger} ${open ? styles.activated : ""}`}>
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        className={` ${styles.navbarLinksContainer} ${open ? styles.open : ""}`}
      >
        <div className={styles.navbarLinkListContainer}>
          <Link className={styles.navbarLink} href="/">
            Home
          </Link>
          <Link className={styles.navbarLink} href="/projects">
            Projects
          </Link>
          <Link className={styles.navbarLink} href="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
