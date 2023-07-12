import { useEffect, useState } from 'react';
import './cv.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

const Cv = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const cv: string = "CV";
  const cvArr: string[] = cv.split("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 1000)
  }, []);

  return (
    <>
      <div className="container cv-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArr={cvArr}
              idx={0}
            />
          </h1>
          <div className="cvs-container">
            <div className="each-cv-cont">
                <NavLink className='to-CV' to='/CV/en'>
                  <FontAwesomeIcon icon={faFilePdf} />
                </NavLink>
            </div>
            <div className="each-cv-cont"></div>
          </div>
        </div>
      </div>
      <Loader type='pacman' active />
    </>
  )

};

export default Cv;