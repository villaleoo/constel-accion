import React from 'react'
import './navbarStyles.scss'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContextProvider } from '../../../context/GlobalProvider'


export const Navbar = () => {
  const {navbarList} = useContext(GlobalContextProvider)
  
 
  return (
        <div className="collapse navbar-collapse navbarContainer" id="navbarNavAltMarkup">
          
          <div className="navbar-nav navListContainer">
          {navbarList.map((navComponent, index)=>(
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
