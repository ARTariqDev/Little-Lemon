import React, { useRef } from 'react';
import styles from './Header.module.css';
import { FaLinkedinIn, FaEnvelope, FaGithub, FaStackOverflow, FaDiscord } from 'react-icons/fa';


const Header = () => {
  const mailtoLink = `mailto:ddrd7718@gmail.com?subject=Business%20Enquiry`;
  const projectsRef = useRef(null); // Ref for Projects component
  const contactRef = useRef(null); // Ref for ContactForm component

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <h2 style={{ color: 'white' }}>Abdur Rehman Tariq's Portfolio</h2>
      <nav className={styles.nav}>
        <a href="https://www.linkedin.com/in/abdur-rehman-tariq-302b1b241/" target="_blank" rel="noreferrer">
          <FaLinkedinIn className={styles.socialIcon} />
        </a>
        <a href={mailtoLink} className={styles.contactIcon}>
          <FaEnvelope className={styles.contactIcon} />
        </a>
        <a href="https://arc.net/l/quote/thtviffz" target="_blank" rel="noreferrer" >
          <FaGithub className={styles.contactIcon} />
        </a>
        <a href="https://stackoverflow.com/">
          <FaStackOverflow className={styles.contactIcon} />
        </a>
        <a href='discord.com'>
          <FaDiscord className={styles.contactIcon} />
        </a>
        <a href="#" className={styles.contactIcon} onClick={() => scrollToSection(projectsRef)}>
          Projects
        </a>
        <a href="#" className={styles.contactIcon} onClick={() => scrollToSection(contactRef)}>
          Contact Me
        </a>
      </nav>
    </header>
  );
};

export default Header;