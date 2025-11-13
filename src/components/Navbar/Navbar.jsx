import NavLinkButton from '../NavLinkButton/NavLinkButton.jsx'
import { NavLink } from 'react-router';
import Logo from '../../../images/TSC_Logo.png'
import './Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <NavLink to="./">
        <img src={Logo} alt="Go to home page" height={100} width={100}/>
      </NavLink>
      <div className='pages-nav'>
          <NavLinkButton location="./about" text="ABOUT" />
          <NavLinkButton location="./events" text="EVENTS" />
          <NavLinkButton location="./curriculum" text="CURRICULUM" />
          <NavLinkButton location="./contact" text="CONTACT" />
      </div>
    </nav>
  )
}