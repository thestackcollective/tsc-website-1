import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/tsc_logo.svg'
import LogoSubtitle from '../../assets/images/stackcollective.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faGraduationCap,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar () {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Stack Collective Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Stack Collective Name" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#8ad4e5" className="anchor-icon"/>
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="curriculum-link"
          to="/curriculum"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faGraduationCap} color="#68c07c" className="anchor-icon"/>
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="donate-link"
          to="/donate"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faDollarSign} color="#efd13b" className="anchor-icon"/>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#de4957" className="anchor-icon"/>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="board-link"
          to="/board"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#ffffff" className="anchor-icon"/>
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
          <div className="other-footer">
            <p>The Stack Collective is a 501(c)(3) non-profit organization. | Site Map</p>
          </div>
      </nav>
      <ul>
        <li>
          <a
            href="https://github.com/thestackcollective"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#444"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}
