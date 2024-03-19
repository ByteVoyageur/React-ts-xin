import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css'
import 'react-modal-video/css/modal-video.css'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import './assets/css/common.css'
import 'rsuite/dist/rsuite.min.css'
import './assets/other/switcher/switcher.css'
import './assets/css/style.css'

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <>
      <div className='page-wrapper'></div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
