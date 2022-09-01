import React from 'react'
import './headerStyles.scss'
import { Navbar } from './navbar/Navbar'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light headerContainer">
      <div className='headerSite'>
        <div className="navbar-brand logoSite" href="#">CONSTELACCION</div>
        <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
        <Navbar/>
    </nav>
  )
}
