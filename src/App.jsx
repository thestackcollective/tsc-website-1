import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Layout from './components/Layout'

import Curriculum from './components/Curriculum'
import Board from './components/Board'
import Donate from './components/Donate'
import NotFound from './components/NotFound'
import './App.scss'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
