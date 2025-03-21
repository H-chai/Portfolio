import { useState } from 'react';
import styles from '../styles/Header.module.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useScroll } from '../contexts/ScrollContext';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuButton() {
    setIsMenuOpen((prev) => !prev);
  }

  const { scrollToProjects, scrollToContact } = useScroll();

  const handleScrollToProjects = () => {
    if (location.pathname === '/') {
      scrollToProjects();
      if (isMenuOpen) {
        toggleMenuButton();
      }
    } else {
      window.location.href = '/?home=projects';
      toggleMenuButton();
    }
  };

  const handleScrollToContact = () => {
    if (location.pathname === '/') {
      scrollToContact();
      if (isMenuOpen) {
        toggleMenuButton();
      }
    } else {
      window.location.href = '/?home=contact';
      toggleMenuButton();
    }
  };

  return (
    <header>
      <Link
        className={`${styles.pageTitle} ${isMenuOpen ? styles.colorWhite : ''}`}
        to="/"
        onClick={`${isMenuOpen ? toggleMenuButton : ''}`}
      >
        HØ
      </Link>
      <nav className={styles.navMenu}>
        <ul className={styles.navMenuList}>
          <li onClick={handleScrollToProjects}>PROJECTS</li>
          {/* <li>ABOUT</li> */}
          <li onClick={handleScrollToContact}>CONTACT</li>
        </ul>
      </nav>
      {isMenuOpen ? (
        <button onClick={toggleMenuButton} className={styles.toggleIcon}>
          <CloseIcon className={styles.colorWhite}></CloseIcon>
        </button>
      ) : (
        <button onClick={toggleMenuButton} className={styles.toggleIcon}>
          <MenuOutlinedIcon></MenuOutlinedIcon>
        </button>
      )}
      <nav
        className={`${styles.navResponsive} ${isMenuOpen ? styles.open : ''}`}
      >
        <ul>
          <li onClick={handleScrollToProjects}>PROJECTS</li>
          {/* <li>ABOUT</li> */}
          <li onClick={handleScrollToContact}>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
