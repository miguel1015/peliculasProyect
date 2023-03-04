import React from 'react'
import "./Navbar.css"
import { Link, Outlet } from 'react-router-dom'
import spiderman from "../images/spiderman.png"
import Pelicula from "../images/pelicula.png"

export default function Navbar() {
  return (
    <div className='cabecera'>
      <nav className='containerCabecera'>
        
        <ul>
        <img  className='spiderman' src={spiderman} alt="" />
        <div className='containerLogo' >
        <img className='logo-peli' src={Pelicula} alt="" />
        </div>

        <div className='losLi' >
          <li>
          <div className="background-one">
            <div className="link-container">
              <Link className="link-one"  to="/" >Home</Link>
            </div>
          </div>
          </li> 
        

          <div className="background-two link-container">
          <li>
            <Link className="link-two" to="/movies" >Movies</Link>
          </li>
          </div>
          
          <div className="background-three link-container">
          <li>
            <Link className="link-three" to="/TV Shows">TV Shows</Link>
          </li>
            </div>

          <div className="background-one">
          <div className="link-container">
          <li>
            <Link className="link-one"  to="/coming soon" >Coming soon</Link>
          </li>
          </div>
          </div>

          <div className="background-two link-container">
            <li>
            <Link className="link-two" to="/premiadas" >Premiadas</Link>
          </li>
          </div>

          <div className="background-three link-container">
          <li>
            <Link className="link-three" to="/best movies" >Best movies</Link>
          </li>
        </div>
          </div>
        </ul>
        
        
       
      </nav>
      <Outlet/>
    </div>
  )
}
