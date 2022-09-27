import React from 'react'
import "./homeStyles.scss"

export const Home = () => {
  return (
    <div className='homeContainer' id='seccionHome'>
      <div className='homeContent'>
          <h2>Estrategia & creatividad</h2>
          <h3>
              <span>¡Es hora de impulsar tu negocio! </span>
              Acompañamos a tu negocio en resolver problemas y aprovechar oportunidades a través del marketing estratégico y la innovación.
          </h3>
          <a className='btn' href={`#seccionContacto`}>¿Hablamos?</a>
      </div>
    </div>
  )
}
