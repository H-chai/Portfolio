import { useState } from 'react';
import styles from '../styles/Header.module.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuButton() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header>
      <div className={styles.pageTitle}>HØ</div>
      <nav className={styles.navMenu}>
        <ul className={styles.navMenuList}>
          <li>PROJECTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      {isMenuOpen ? (
        <div>
          <button onClick={toggleMenuButton} className={styles.toggleIcon}>
            <CloseIcon></CloseIcon>
          </button>
        </div>
      ) : (
        <button onClick={toggleMenuButton} className={styles.toggleIcon}>
          <MenuOutlinedIcon></MenuOutlinedIcon>
        </button>
      )}
      <nav
        className={`${styles.navResponsive} ${isMenuOpen ? styles.open : ''}`}
      >
        <ul>
          <li>PROJECTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
