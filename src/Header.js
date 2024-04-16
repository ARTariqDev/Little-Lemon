import React, { useRef, useState } from 'react';
import styles from './Header.module.css';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  return (
    <header className={styles.header}>
      <img src="logo.png" alt='' />

      {/* Navigation for larger screens */}
      <nav className={`${styles.nav} ${styles.desktopNav}`}>
        <HashLink to="/" smooth className={styles.contactIcon}>Home</HashLink>
        <HashLink to="/about#about" smooth className={styles.contactIcon}>About</HashLink>
        <HashLink to="/menu" smooth className={styles.contactIcon}>Menu</HashLink> 
        <HashLink to="/reservations" smooth className={styles.contactIcon}>Reservations</HashLink>
        <HashLink to="/order" smooth className={styles.contactIcon}>Online Order</HashLink>
        <HashLink to="/login" smooth className={styles.contactIcon}>Login</HashLink> {/* Fixed closing bracket */}
      </nav>

      {/* Hamburger icon for mobile navigation */}
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        <span className={styles.hamburgerIcon}>
          &#9776;
        </span>
      </button>

      {/* Mobile navigation (conditional rendering) */}
      {isMobileMenuOpen && (
        <nav className={`${styles.mobileNav} ${styles.mobileMenu}`}>
          <HashLink to="/" smooth className={styles.mobileNavItem}>Home</HashLink>
          <HashLink to="/about#about" smooth className={styles.mobileNavItem}>About</HashLink>
          <HashLink to="/menu" smooth className={styles.mobileNavItem}>Menu</HashLink>
          <HashLink to="/reservations" smooth className={styles.mobileNavItem}>Reservations</HashLink>
          <HashLink to="/order" smooth className={styles.mobileNavItem}>Online Order</HashLink>
          <HashLink to="/login" smooth className={styles.mobileNavItem}>Login</HashLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
