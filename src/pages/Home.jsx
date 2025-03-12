import scrollDown from '../assets/scrolldown.svg';
import eCom from '../assets/eCom.svg';
import CrediBid from '../assets/CrediBid.svg';
import Postlyfe from '../assets/Postlyfe.svg';
import ScienceMuseum from '../assets/ScienceMuseum.svg';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <section>
        <div>
          <h1>
            hi, I’m Hikari,
            <span>a japanese </span>
            <br />
            <span>frontend developer </span>
            based in norway
          </h1>
        </div>
        <div>
          <div>
            <h2>Open to work</h2>
            <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
          </div>
          <img src={scrollDown} alt="circle" />
        </div>
      </section>
      <section>
        <h2>Selected Projects</h2>
        <ul>
          <li>
            <Link>
              <p>eCom</p>
              <img src={eCom} alt="eCom mockup image" />
            </Link>
          </li>
          <li>
            <Link>
              <p>CrediBid</p>
            </Link>
            <img src={CrediBid} alt="CrediBid mockup image" />
          </li>
          <li>
            <Link>
              <p>Postlyfe</p>
            </Link>
            <img src={Postlyfe} alt="Postlyfe mockup image" />
          </li>
          <li>
            <Link>
              <p>Community Science Museum</p>
            </Link>
            <img src={ScienceMuseum} alt="ScienceMuseum mockup image" />
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
