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
        <div className="text-zone skills-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={skillsArr}
              idx={10}
            />
          </h1>
          <div className="skills-logo-container">
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoReact} alt="React" className="skills-logo-img" />
                <h2 className="skills-logo-name">React</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoTS} alt="TypeScript" className="skills-logo-img" />
                <h2 className="skills-logo-name">TypeScript</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoJS} alt="JavaScript" className="skills-logo-img" />
                <h2 className="skills-logo-name">JavaScript</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoAng} alt="Angular" className="skills-logo-img" />
                <h2 className="skills-logo-name">Angular</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoNodeJS} alt="Node JS" className="skills-logo-img" />
                <h2 className="skills-logo-name">Node JS</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoJava} alt="Java" className="skills-logo-img" />
                <h2 className="skills-logo-name">Java</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoSpring} alt="Spring" className="skills-logo-img" />
                <h2 className="skills-logo-name">Spring</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoHTML} alt="HTML" className="skills-logo-img" />
                <h2 className="skills-logo-name">HTML</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoSASS} alt="SASS" className="skills-logo-img" />
                <h2 className="skills-logo-name">SASS</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoCSS} alt="CSS" className="skills-logo-img" />
                <h2 className="skills-logo-name">CSS</h2>
              </div>
            </button>
            <button className="skills-logo">
              <div className="skills-logo-img-cont">
                <img src={logoGit} alt="GIT" className="skills-logo-img" />
                <h2 className="skills-logo-name">GIT</h2>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Loader type='pacman' active />
    </>
  )

}


export default Skills;