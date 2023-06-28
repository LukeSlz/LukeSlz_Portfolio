import { Link } from 'react-router-dom';
import LogoW from '../../assets/images/WOLF.png'
import './home.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Logo from '../Logo/logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const name: string = "Luke Salazar";
  const job: string = "Web Developer";
  const nameArr: string[] = name.split("");
  const jobArr: string[] = job.split("");
  
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4500)
  }, []);



  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} __12`}>i</span>
          <span className={`${letterClass} __13 comma`}>,</span>
          <span className={`${letterClass} __14`}>I</span>
          <span className={`${letterClass} __15`}>'m</span>

        <img src={LogoW} alt="Luke's logo" />
        <br />
        <AnimatedLetters letterClass={letterClass} strArr={nameArr} idx={16} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArr={jobArr} idx={28} />
        </h1>

        <h2>Frontend | Backend | FullStack</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>

      <Logo />
    </div>
  )

}

export default Home;