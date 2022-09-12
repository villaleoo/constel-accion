import React from 'react'
import { Accion } from './accion/Accion'
import { Home } from './home/Home'
import "./sectionList.scss"

export const SectionList = () => {
  return (
    <div className='listContainer'>
        <Home/>
        <Accion/>
    </div>
  )
}
