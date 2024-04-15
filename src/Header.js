import React, { useRef, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  return (
    <header className={styles.header}>
      <img src="logo.png" alt='' />

      {/* Navigation for larger screens */}
      <nav className={`${styles.nav} ${styles.desktopNav}`}>
        <a href="#" className={styles.contactIcon}>Home</a>
        <a href="#" className={styles.contactIcon}>About</a>
        <a href="#" className={styles.contactIcon}>Menu</a>
        <a href="#" className={styles.contactIcon}>Reservations</a>
        <a href="#" className={styles.contactIcon}>Online Order</a>
        <a href="#" className={styles.contactIcon}>Login</a>
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
          <a href="#" className={styles.mobileNavItem}>Home</a>
          <a href="#" className={styles.mobileNavItem}>About</a>
          <a href="#" className={styles.mobileNavItem}>Menu</a>
          <a href="#" className={styles.mobileNavItem}>Reservations</a>
          <a href="#" className={styles.mobileNavItem}>Online Order</a>
          <a href="#" className={styles.mobileNavItem}>Login</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
