import './App.css'

import Navbar from './components/Navbar/Navbar';

import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
