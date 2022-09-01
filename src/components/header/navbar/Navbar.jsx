import React from 'react'
import './navbarStyles.scss'

export const Navbar = () => {
  return (
        <div class="collapse navbar-collapse navbarContainer" id="navbarNavAltMarkup">
          <div class="navbar-nav navListContainer">
            <a class="nav-link active" href="#">Servicios <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#">Marca</a>
            <a class="nav-link" href="#">Colaboradores</a>
            <a class="nav-link" href="#">Experiencia</a>
            <a class="nav-link">Contacto</a>
          </div>
        </div>
  )
}
