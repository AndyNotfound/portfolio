import styles from "@/styles/components/navbar.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarLogo}>A.</Link>
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
          <Link className={styles.navbarLink} href="/projects" prefetch>
            Projects
          </Link>
          <Link className={styles.navbarLink} href="/about" as="creative-developer" prefetch>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
