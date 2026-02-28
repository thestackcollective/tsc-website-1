import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

import ContactPhoto from '../../assets/images/folks_whiteboarding_red.jpg';

export default function Contact() {
  const formRef = useRef()

  const publicK ="2-bETDYQdKWSp8_Us"
  const serviceK ="service_5g2uk1s"
  const templateK ="template_0xcdzw9"

  function sendEmail(event) {
      event.preventDefault();

      emailjs
        .sendForm(
          serviceK,
          templateK,
          formRef.current,
          publicK
        )
        .then(
          () => {
            alert("Message sent successfully!")
            window.location.reload(false)
          },
          () => {
            alert("Message failed to be sent.")
          }
        )
    }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contact Us
          </h1>
          <p>
            Contact us about our curriculum, our events, joining the community, and more!
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <img src={ContactPhoto} alt="Stock Image" />
        </div>
      </div>
    </>
  )
}
