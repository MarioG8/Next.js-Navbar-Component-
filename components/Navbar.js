import React, { useState, useRef, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { GiFootprint, GiNinjaHead } from "react-icons/gi";
import { links } from "../data/data.js";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 750) {
        setNavigation(true);
      } else {
        setNavigation(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <header
      className={
        navigation
          ? `${styles.navigation} ${styles.active}`
          : `${styles.navigation}`
      }
    >
      <nav className={styles.nav}>
        <div className={styles.center}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  Navigation<span className={styles.span}>bar</span>
                </a>
              </Link>
              <GiNinjaHead className={styles.icon} />
            </div>

            <button className={styles.toggle} onClick={toggleLinks}>
              <VscMenu size={30} />
            </button>
          </div>
          <div className={styles.linksContainer} ref={linksContainerRef}>
            <ul className={styles.links} ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} onClick={toggleLinks}>
                    <Link href={url}>
                      <a>{text}</a>
                    </Link>
                  </li>
                );
              })}
              <div className={styles.login_container}>
                <Link href="/" passHref>
                  <button className={styles.login_btn}>Log in</button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
