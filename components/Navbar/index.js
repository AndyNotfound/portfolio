import styles from "@/styles/components/Navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);
  const navbarRoute = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Certificate", link: "/certificate" },
    { name: "About", link: "/about" },
  ];
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarLogo}>
        A.
      </Link>
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
          {navbarRoute?.map((item, index) => {
            return (
              <Link
                key={index}
                className={`${
                  router.pathname == item.link ? styles.navbarLinkActive : ""
                } ${styles.navbarLink}`}
                href={item.link}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
