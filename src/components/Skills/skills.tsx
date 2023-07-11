import './skills.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Loader from 'react-loaders';

import logoAng from '../../assets/images/logo_Angular.png';
import logoCSS from '../../assets/images/logo_CSS.png';
import logoGit from '../../assets/images/logo_git.png';
import logoHTML from '../../assets/images/logo_HTML.png';
import logoJava from '../../assets/images/logo_Java.png';
import logoJS from '../../assets/images/logo_JS.png';
import logoNodeJS from '../../assets/images/logo_nodeJS.png';
import logoReact from '../../assets/images/logo_React.png';
import logoSpring from '../../assets/images/logo_Spring.png';
import logoTS from '../../assets/images/logo_TS.png';
import logoSASS from '../../assets/images/logo_SASS.png';

const Skills = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const skills: string = "Tech Skills";
  const skillsArr: string[] = skills.split("");
  
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);
  
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={skillsArr}
              idx={10}
            />
          </h1>
          <div className="skills-logo-container">
            <a href="#" className="skills-logo">
              <img src={logoReact} alt="React" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoTS} alt="TypeScript" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoJS} alt="JavaScript" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoAng} alt="Angular" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoNodeJS} alt="Node JS" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoJava} alt="Java" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoSpring} alt="Spring" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoHTML} alt="HTML" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoSASS} alt="SASS" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoCSS} alt="CSS" className="skills-logo-img" />
            </a>
            <a href="#" className="skills-logo">
              <img src={logoGit} alt="GIT" className="skills-logo-img" />
            </a>
          </div>
        </div>
      </div>
      <Loader type='pacman' active />
    </>
  )

}


export default Skills;