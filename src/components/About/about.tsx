import './about.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { useState } from 'react';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const abt: string = "About me"
  const abtArr: string[] = abt.split("");

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArr={abtArr}
            idx={15}
          />
        </h1>
      </div>
    </div>
  )
};

export default About;