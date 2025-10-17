import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './pages/Footer/Footer'

import { Outlet } from 'react-router'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
