import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './../Pages/Home'
import About from './../Pages/About'
import Contact from './../Pages/Contact'
import './Navbar.css'


function Navbar() {
  return (

        <nav>
            <Link to="/">
                <img height={60} src="logo.svg" alt="" />
            </Link>
            <ul style={{listStyle:'none'}}>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
                <li>
                    <Link to="Register">Register</Link>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar