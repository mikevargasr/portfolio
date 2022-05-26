import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import portfolio_pic from '../../assets/images/portfolio_pic.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope, faLinkedIn, faGithub} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={portfolio_pic} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/michael-vargas-a7b832159/'>
                    <FontAwesomeIcon icon={faLinkedIn} color = "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mikevargasr'>
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;