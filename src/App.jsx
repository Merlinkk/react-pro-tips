import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Form from './components/Form'

function App() {

  return (
    <>
      <Navbar />
        <div className='routeWrap'>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Register" element={<Form />} />
        </Routes>
        </div>
    </>
  )
}

export default App
