import './logo.scss';
import LogoW from '../../../assets/images/WOLF.png';


const Logo = () => {

  return (
    <div className="logo-container">
      <img src={LogoW} alt="Wolf logo" className="solid-logo" />
    </div>
  )
};

export default Logo;