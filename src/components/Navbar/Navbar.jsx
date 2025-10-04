import NavLinkButton from '../NavLinkButton/NavLinkButton.jsx'
import './Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <NavLinkButton location="./" text="TheStackCollective" />
      <NavLinkButton location="./about" text="About" />
      <NavLinkButton location="./events" text="Events" />
      <NavLinkButton location="./curriculum" text="Curriculum" />
      <NavLinkButton location="./contact" text="Contact" />
    </nav>
  )
}