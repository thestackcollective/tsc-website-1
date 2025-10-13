import NavLinkButton from '../NavLinkButton/NavLinkButton.jsx'
import './Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <NavLinkButton location="./" text="TheStackCollective" />
      <div className='pages-nav'>
          <NavLinkButton location="./about" text="ABOUT" />
          <NavLinkButton location="./events" text="EVENTS" />
          <NavLinkButton location="./curriculum" text="CURRICULUM" />
          <NavLinkButton location="./contact" text="CONTACT" />
      </div>
    </nav>
  )
}