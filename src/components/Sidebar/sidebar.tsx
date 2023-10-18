import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import LogoW from '../../assets/images/WOLF.png';
import LogoSubtitle from '../../assets/images/logo_sub_Luke.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faFolderTree, faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <Link className='logo' to='/Portfolio/'>
        <img src={LogoW} className='logo__wolf' alt='logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='Luke Slz' />
      </Link>
      <nav>
        <NavLink className={navData => navData.isActive ? "active" : ""} to="/Portfolio/">    {/* activeclassname is deprecated for React Router v6 */}
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink className={navData => `about-link ${navData.isActive ? "active" : ""}`} to="/Portfolio/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink className={navData => `skills-link ${navData.isActive ? "active" : ""}`} to="/Portfolio/skills">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink className={navData => `cv-link ${navData.isActive ? "active" : ""}`} to="/Portfolio/CV">
          <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e" />
        </NavLink>
        <NavLink className={navData => `projects-link ${navData.isActive ? "active" : ""}`} to="/Portfolio/projects">
          <FontAwesomeIcon icon={faFolderTree} color="#4d4d4e" />
        </NavLink>
        <NavLink className={navData => `contact-link ${navData.isActive ? "active" : ""}`} to="/Portfolio/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/lukeslz/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/LukeSlz'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  </>
)
export default Sidebar;