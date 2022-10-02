import React from 'react'
import './accionStyles.scss'
import manoIzq from '../../../assets/manoIzq.png'
import manoDer from '../../../assets/manoDer.png'

export const Accion = () => {
  return (
    <div className='accionContainer'>
      <img className='manoIzq' src={manoIzq} />
      <img className='manoDer' src={manoDer} />
        <div className='accionContent'>
            <div className='accionTitles'>
                <h2>Del pensamiento a la acción</h2>
                <h3>Colaboramos con tu negocio con servicios de estrategia y creatividad.</h3>
            </div>
            <div className='accionSubtitles'>
                <p className='primerParrafo'>Con foco en las personas-consumidoras, y <br></br> también en las de tu organización.</p>
                <p className='segundoParrafo'>A la medida de tus necesidades y desafíos, sin <br></br> estandarizar.</p>
            </div>
        </div>
    </div>
  )
}
