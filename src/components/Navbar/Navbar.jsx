import NavLinkButton from '../NavLinkButton/NavLinkButton.jsx'
import './Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <NavLinkButton location="./" text="TheStackCollective" />
      <div className='pages-nav'>
        <div>
          <NavLinkButton location="./about" text="About" />
        </div>
        <div>
          <NavLinkButton location="./events" text="Events" />
        </div>
        <div>
          <NavLinkButton location="./curriculum" text="Curriculum" />
        </div>
        <div>
          <NavLinkButton location="./contact" text="Contact" />
        </div>
      </div>
    </nav>
  )
}