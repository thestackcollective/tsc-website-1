import { Link } from 'react-router-dom'
import './index.scss'

import BookPhoto from '../../assets/images/splashgreen.jpg';


export default function Curriculum() {

  return (
    <>
      <div className="container curriculum-page">
        <div className="text-zone">
          <h1> Curriculum </h1>
          <h2>Open Source Ruby and React Curriculum</h2>
          <div className="site-buttons">
            <Link to="https://curriculum.turing.edu" className="flat-button">
              LAUNCH CURRICULUM SITE
            </Link>
            <Link to="https://frontend.turing.edu" className="flat-button">
              LAUNCH FRONTEND SITE
            </Link>
            <Link to="https://backend.turing.edu" className="flat-button">
             LAUNCH BACKEND SITE
            </Link>
          </div>
        </div>
        <div className="map-wrap">
          <img src={BookPhoto} alt="Stock Image" />
        </div>
      </div>
    </>
  )
}
