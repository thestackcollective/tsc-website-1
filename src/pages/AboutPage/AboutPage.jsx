import './AboutPage.css'
import NavLinkButton from "../../components/NavLinkButton/NavLinkButton"

export default function AboutPage() {
  return (
    <section className="about-page">
      <h2>About Us</h2>
      <div className="about-page-overview-top">
        <p>
          In a time when finding new work can feel more challenging, The Stack Collective is here to bring people together through building connections, sharing experiences, and supporting each other's career journeys.
        </p>
        <p>
          Our mission is to facilitate the career development of full stack tech professionals in meaningful software careers by providing networking, educational, and career support opportunities.
        </p>
      </div>
      <div className="about-page-overview-bottom">
        <p>
          We offer events and services to help realize this mission, including:
        </p>
        <ul>
          <li>
            Workshops
          </li>
          <li>
            Networking events
          </li>
          <li>
            Study sessions
          </li>
          <li>
            Official meetings
          </li>
        </ul>
      </div>
      <div className='about-page-outro'>
        <p>To see our upcoming events 
          <span>
            <NavLinkButton location="/events" text=" click here" />
          </span>
          , or 
          <span>
            <NavLinkButton location="/contact" text=" contact us with any questions." />
          </span>
        </p>
      </div>
    </section>
  )
}