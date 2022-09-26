import React from 'react'
import './sliderStyles.scss'

export const Slider = () => {

    let arrayServicios= ['Investigadores' ,'Diseñadores gráficos','Desarrolladores', 'Copywriting', 'Researchs', 'Diseñadores UX/UI', 'Analistas de datos']
    



  return (
    <div id="carouselExampleInterval" className="carousel slide carousel-fade sliderContainer" data-ride="false" data-interval="false" >
        <div className="carousel-inner sliderContent">
          <div className="carousel-item active  sliderConjuntoItems">
            {
                arrayServicios.slice(0,3).map((service, index)=>
                    <p  key={index}>{service}</p>
                )
               
            }
          </div>
          <div className="carousel-item sliderConjuntoItems">
            {
                arrayServicios.slice(4,7).map((service, index)=>
                    <p key={index}>{service}</p>
                )
               
            }
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-target="#carouselExampleInterval" data-slide="prev">
          <span className="carousel-control-prev-icon bgSpan" aria-hidden="true"></span>
          <span className="sr-only bgSpan">Previous</span>
        </button>
        <button className="carousel-control-next bgSpan" type="button" data-target="#carouselExampleInterval" data-slide="next">
          <span className="carousel-control-next-icon bgSpan " aria-hidden="true"></span>
          <span className="sr-only bgSpan">Next</span>
        </button>
    </div>
  )
}
