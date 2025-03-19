import { useEffect, useRef, useState } from 'react';
import scrollDown from '../../public/assets/scrolldown.svg';
import eCom from '../../public/assets/eCom.svg';
import CrediBid from '../../public/assets/CrediBid.svg';
import Postlyfe from '../../public/assets/Postlyfe.svg';
import ScienceMuseum from '../../public/assets/ScienceMuseum.svg';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Link } from 'react-router-dom';
import mainStyles from '../styles/HomeMain.module.css';
import projectStyles from '../styles/HomeProject.module.css';
import contactStyles from '../styles/HomeContact.module.css';
import Profile from '../../public/assets/profile.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useScroll } from '../contexts/ScrollContext';

export function Home() {
  const headingText =
    'hi, I’m Hikari, a japanese frontend developer based in norway';

  const [isScrolled, setIsScrolled] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('home');

    if (scrollTo === 'projects') {
      scrollToProjects();
    } else if (scrollTo === 'contact') {
      scrollToContact();
    }
  }, [location]);

  const {
    projectSectionRef,
    contactSectionRef,
    scrollToProjects,
    scrollToContact,
  } = useScroll();

  return (
    <div>
      <section className={mainStyles.mainVisual}>
        <div className={mainStyles.mainTop}>
          <h1>
            {headingText.split('').map((char, index) => (
              <span
                key={index}
                className={`${mainStyles.fadeIn} ${
                  index >= 8 && index <= 13 ? mainStyles.highlight : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <img
            src={Profile}
            alt="profile image"
            className={mainStyles.profileImage}
          />
        </div>
        <div className={mainStyles.mainBottom}>
          <div className={mainStyles.mainBottomLeft}>
            <h2>Open to work</h2>
            <SentimentSatisfiedAltIcon
              className={mainStyles.smileIcon}
            ></SentimentSatisfiedAltIcon>
          </div>
          <img
            src={scrollDown}
            alt="circle"
            className={mainStyles.scrollDown}
          />
        </div>
      </section>
      <div ref={projectRef}>
        <section
          ref={projectSectionRef}
          className={`${projectStyles.projectSection} ${isScrolled ? projectStyles.scrolled : ''}`}
        >
          <h2>Selected Projects</h2>
          <ul className={projectStyles.projectList}>
            <li>
              <Link className={projectStyles.projectLink} to="/project/1">
                <p className={projectStyles.projectTitle}>eCom</p>
                <img
                  src={eCom}
                  alt="eCom mockup image"
                  className={projectStyles.projectImage}
                />
              </Link>
            </li>
            <li>
              <Link className={projectStyles.projectLink} to="/project/2">
                <p className={projectStyles.projectTitle}>CrediBid</p>
                <img
                  src={CrediBid}
                  alt="CrediBid mockup image"
                  className={projectStyles.projectImage}
                />
              </Link>
            </li>
            <li>
              <Link className={projectStyles.projectLink} to="/project/3">
                <p className={projectStyles.projectTitle}>Postlyfe</p>
                <img
                  src={Postlyfe}
                  alt="Postlyfe mockup image"
                  className={projectStyles.projectImage}
                />
              </Link>
            </li>
            <li>
              <Link className={projectStyles.projectLink} to="/project/4">
                <p className={projectStyles.projectTitle}>
                  Community Science Museum
                </p>
                <img
                  src={ScienceMuseum}
                  alt="ScienceMuseum mockup image"
                  className={projectStyles.projectImage}
                />
              </Link>
            </li>
          </ul>
        </section>
        <section
          className={contactStyles.contactSection}
          ref={contactSectionRef}
        >
          <Link
            className={contactStyles.mail}
            to="mailto:overby.hikari@gmail.com"
          >
            <h2 className={contactStyles.contactHeading}>Get in touch</h2>
            <ArrowOutwardIcon></ArrowOutwardIcon>
          </Link>
          <div className={contactStyles.contactBottom}>
            <div>
              <h3 className={contactStyles.contactBottomTitle}>Navigation</h3>
              <nav>
                <ul>
                  <li
                    className={contactStyles.contactNavListItem}
                    onClick={scrollToProjects}
                  >
                    PROJECTS
                  </li>
                  {/* <li className={contactStyles.contactNavListItem}>ABOUT</li> */}
                  <li
                    className={contactStyles.contactNavListItem}
                    onClick={scrollToContact}
                  >
                    CONTACT
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3 className={contactStyles.contactBottomTitle}>Social</h3>
              <nav>
                <ul>
                  <li>
                    <Link
                      to="https://www.linkedin.com/in/hikari-%C3%B8verby-957493241/"
                      target="_blank"
                    >
                      Linkedin<ArrowOutwardIcon></ArrowOutwardIcon>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/H-chai" target="_blank">
                      Github<ArrowOutwardIcon></ArrowOutwardIcon>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
