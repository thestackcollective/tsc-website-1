import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          This site is managed by <span>The Stack Collective</span>
        </p>
        <p>
          The Stack Collective is a 501(c)(3) non-profit organization.
        </p>
        <div className='footer-links'>
          <p>
            Contact Us
          </p>
          <span className='footer-link-separator'>.</span>
          <p>
            Site Policies
          </p>
          <span className='footer-link-separator'>.</span>
          <p>
            Site Map
          </p>
        </div>
      </div>
    </footer>
  )
}
