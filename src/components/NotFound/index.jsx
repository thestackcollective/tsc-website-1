import { Link } from 'react-router-dom'
import Logo from '../Home/Logo'
import './index.scss'

import SoftwareEngineer from '../../assets/images/softwareengineer.jpg';

export default function NotFound() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>404: Page Not Found</h1>
          <h2>The page you are looking for does not exist.</h2>
          <Link to="/" className="flat-button">
            Go Home
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
