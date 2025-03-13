import { useEffect, useRef, useState } from 'react';
import scrollDown from '../assets/scrolldown.svg';
import eCom from '../assets/eCom.svg';
import CrediBid from '../assets/CrediBid.svg';
import Postlyfe from '../assets/Postlyfe.svg';
import ScienceMuseum from '../assets/ScienceMuseum.svg';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import mainStyles from '../styles/HomeMain.module.css';
import projectStyles from '../styles/HomeProject.module.css';
import Profile from '../assets/profile.svg';

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
      <section
        ref={projectRef}
        className={`${projectStyles.projectSection} ${isScrolled ? projectStyles.scrolled : ''}`}
      >
        <h2>Selected Projects</h2>
        <ul className={projectStyles.projectList}>
          <li>
            <Link className={projectStyles.projectLink}>
              <p className={projectStyles.projectTitle}>eCom</p>
              <img
                src={eCom}
                alt="eCom mockup image"
                className={projectStyles.projectImage}
              />
            </Link>
          </li>
          <li>
            <Link className={projectStyles.projectLink}>
              <p className={projectStyles.projectTitle}>CrediBid</p>
              <img
                src={CrediBid}
                alt="CrediBid mockup image"
                className={projectStyles.projectImage}
              />
            </Link>
          </li>
          <li>
            <Link className={projectStyles.projectLink}>
              <p className={projectStyles.projectTitle}>Postlyfe</p>
              <img
                src={Postlyfe}
                alt="Postlyfe mockup image"
                className={projectStyles.projectImage}
              />
            </Link>
          </li>
          <li>
            <Link className={projectStyles.projectLink}>
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
      <section>
        <div>
          <h2>Get in touch</h2>
        </div>
        <div>
          <div>
            <h3>Navigation</h3>
            <nav>
              <ul>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </div>
          <div>
            <h3>Social</h3>
            <nav>
              <ul>
                <li>
                  <Link>
                    Linkedin<LinkedInIcon></LinkedInIcon>
                  </Link>
                </li>
                <li>
                  <Link>
                    Github<GitHubIcon></GitHubIcon>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
