import '../styles/Footer.css';
import githubIcon from '../images/icons/git-icon.png';
import linkedInIcon from '../images/icons/linkedin-icon.png';

export default function Footer() {
  return (
    <footer className="bg-darker-tp text-center text-light mt-auto">
      <div className="container p-4">
        <div className="mb-2">
          <a href="https://github.com/ottobisno" className="soc-med-icon">
            <img src={githubIcon} width="35" height="35"/>
          </a>
          <a href="https://www.linkedin.com/in/otto-bisno-b39392134/" className="soc-med-icon">
            <img src={linkedInIcon} width="35" height="35"/>
          </a>
        </div>
      </div>
    </footer>
  );
};
