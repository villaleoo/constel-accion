import React from 'react'
import './navbarStyles.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  let navbarComponents= ['Servicios', 'Marca', 'Colaboradores', 'Experiencia', 'Contacto']

  return (
        <div className="collapse navbar-collapse navbarContainer" id="navbarNavAltMarkup">
          <div className="navbar-nav navListContainer">
          {navbarComponents.map((navComponent, index)=>(
            <NavLink 
            key={index} 
            to={`/${navComponent}`}>{navComponent}</NavLink>
          )
          )
          }
          </div>
        </div>
  )
}
