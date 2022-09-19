import React from 'react'
import "./sectionList.scss"
import { Home } from './home/Home'
import { Accion } from './accion/Accion'
import { Hacemos } from './hacemos/Hacemos'
import { Somos } from './somos/Somos'
import { Creamos } from './creamos/Creamos'
import { Contacto } from './contacto/Contacto'

export const SectionList = () => {
  return (
    <div className='listContainer'>
        <Home/>
        <Accion/>
        <Hacemos/>
        <Somos/>
        <Creamos/>
        <Contacto/>
    </div>
  )
}
