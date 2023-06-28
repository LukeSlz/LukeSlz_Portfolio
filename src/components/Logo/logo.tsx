import './logo.scss';
import LogoW from '../../assets/images/WOLF.png';
import { useRef } from 'react';


const Logo = () => {

  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  

  return (
    <div className="logo-container">
      <img src={LogoW} alt="Wolf logo" className="solid-logo" />
    </div>
  )
};

export default Logo;