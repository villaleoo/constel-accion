import React from 'react'
import './headerStyles.scss'
import { Navbar } from './navbar/Navbar'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light headerContainer">
      <div className='headerSite'>
        <div className="navbar-brand logoSite"><Link to={'/'}> <h1>CONSTEL•LACCION</h1></Link></div>
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
