"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import {
  dashboardLogo,
  avatar,
  search,
  notification,
  dropDownArrow,
  hamburgerMenu,
  closeMenu,
} from "../../../../public/icon";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <div className={styles.menu}>
          <Image
            src={isMenuOpen ? closeMenu : hamburgerMenu}
            alt="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menu}
          />
        </div>
        {isMenuOpen && <Sidebar />}
        <div className={styles.logo}>
          <Image src={dashboardLogo} alt="dashboard logo" />
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search for anything" />
          <button>
            <Image src={search} alt="search" />
          </button>
        </div>
      </div>
      <div className={styles.navbar__right}>
        <a href="/docs">Docs</a>
        <Image
          src={notification}
          alt="notification icon"
          className={styles.notification}
        />
        <div className={styles.right__avatar}>
          <Image src={avatar} alt="avatar" className={styles.avatar} />
          <p>
            Adedeji
            <Image src={dropDownArrow} alt="drop down arrow" />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
