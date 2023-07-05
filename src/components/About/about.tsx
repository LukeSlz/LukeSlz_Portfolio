import './about.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const abt: string = "About me"
  const abtArr: string[] = abt.split("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArr={abtArr}
            idx={10}
          />
        </h1>
        <p>
          Passionate and curious web developer who thrives on the ever-evolving nature of technology. With a deep fascination for the digital world, I embark on a constant quest for knowledge, always seeking to expand my skills and stay ahead of the curve. 
        </p>
        <p>
          At the core of my development philosophy is the belief that learning is a lifelong process. As a dedicated and self-motivated learner, I embrace every opportunity to enhance my expertise and push the boundaries of what is possible in web development.
        </p>
        <p>
          I am deeply passionate about web development, driven by my desire to create innovative and impactful digital solutions. Whether it's architecting efficient backend systems or crafting seamless frontend and backend interactions, I am excited to take on diverse challenges and collaborate with experienced developers to further refine my abilities. With a growth mindset and a thirst for knowledge, I am committed to continuously learning and developing my skills as a versatile web developer. 
        </p>
        <p>
          Join me as I share my experiences and creations, fueled by my insatiable curiosity.
        </p>
      </div>

    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
        </div>
      </div>
    </div>

    </div>
    <Loader type='pacman' active/>
    </>
  )
};

export default About;