import "./ErrorPage.css"
import { NavLink } from 'react-router'

export default function ErrorPage() {
  return (
    <section className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>You have reached a page that does not exist</p>
      <div className="error-page-button-container">
        <NavLink to="/">
          <button className="error-page-button">
            Return Home
          </button>
        </NavLink>
      </div>
    </section>
  )
}