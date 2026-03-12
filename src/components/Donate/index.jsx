import './index.scss'
import { Link } from 'react-router'

import EngineerPhoto from '../../assets/images/pexelsengineeryellow.jpg';
import DonorboxScreenshotButton from '../../assets/images/donorboxscreenshotbutton.png';
import Widget from './Widget'

export default function Donate() {

  // const donorboxCode = `
  //   <dbox-widget campaign="stackcollective-donation-page" type="donation_form" enable-auto-scroll="true"></dbox-widget>
  // `;

  return (
    <>
      <div className="container donate-page">
        <div className="donor-zone">
          <br />
          <h1>Donate</h1>
          <br />
          <div className="donor-box">
            <Link className="donor-box-button" to="https://donorbox.org/stackcollective-donation-page">
              <img src={DonorboxScreenshotButton} alt="Donorbox Screenshot Button" />
            </Link>
            {/* <script type="module" src="https://donorbox.org/widgets.js" async></script>
            <div dangerouslySetInnerHTML={{ __html: donorboxCode }}></div> */}
          </div>
          {/* <div id="donor-box-id" className="donor-box"> */}
            {/* <Widget /> */}
          {/* </div> */}
          {/* <Link to="https://donorbox.org/stackcollective-donation-page" className="flat-button">
            Launch DonorBox
          </Link> */}
        </div>
        <div className="map-wrap">
          <img src={EngineerPhoto} alt="Stock Image" />
        </div>
      </div>
    </>
  )
}
