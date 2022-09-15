import React from 'react'
import { Accion } from './accion/Accion'
import { Home } from './home/Home'
import "./sectionList.scss"
import { Hacemos } from './hacemos/Hacemos'

export const SectionList = () => {
  return (
    <div className='listContainer'>
        <Home/>
        <Accion/>
        <Hacemos/>
    </div>
  )
}
