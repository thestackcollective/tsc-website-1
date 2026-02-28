import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

export default function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
      <footer className="basic-footer">
        <p>The Stack Collective is a 501(c)(3) non-profit organization. | Site Map</p>
      </footer>
    </div>
  )
}
