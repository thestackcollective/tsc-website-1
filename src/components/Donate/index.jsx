import './index.scss'

import EngineerPhoto from '../../assets/images/pexels-engineer-yellow.jpg';


export default function Donate() {

  const donorboxCode = `
    <dbox-widget campaign="stackcollective-donation-page" type="donation_form" enable-auto-scroll="true"></dbox-widget>
  `;

  return (
    <>
      <div className="container donate-page">
        <div className="donor-zone">
          <br />
          <h1>Donate</h1>
          <br />
          <div className="donor-box">
            <script type="module" src="https://donorbox.org/widgets.js" async></script>
            <div dangerouslySetInnerHTML={{ __html: donorboxCode }}></div>
<<<<<<< HEAD
          </div> */}
>>>>>>> d133f0ca58a2fbf8c072c009241562903b3b3f74
=======
          </div>
>>>>>>> fb4db6ae0d3a79eb83dd7afe024fe4c21bcfc294
        </div>
        <div className="map-wrap">
          <img src={EngineerPhoto} alt="Stock Image" />
        </div>
      </div>
    </>
  )
}
