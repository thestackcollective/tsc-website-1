import { Link } from 'react-router-dom'
import Logo from './Logo'
import './index.scss'

import SoftwareEngineer from '../../assets/images/softwareengineer.jpg';

export default function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>TheStackCollective</h1>
          <h2>Community | Curriculum | Professional Development</h2>
          <p>Facilitating the career development of full stack tech professionals in meaningful software careers by providing networking, educational, and career support opportunities.</p>
          <Link to="/contact" className="flat-button">
            CONTACT US
          </Link>
        </div>
        <div className="map-wrap">
          <img src={SoftwareEngineer} alt="Stock Image" />
          <Logo />
        </div>
      </div>
    </>
  )
}
