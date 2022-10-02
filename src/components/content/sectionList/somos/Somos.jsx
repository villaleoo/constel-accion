import React from 'react'
import { useContext } from 'react'
import { GlobalContextProvider } from '../../../../context/GlobalProvider'
import { Slider } from './slider/Slider'
import './somosStyles.scss'


export const Somos = () => {

    const {somosContent}=useContext(GlobalContextProvider);
    const {keywords} = somosContent;
    



  return (
    <div className='somosContainer' id='seccionSomos'>
        <div className='somosContent'>
            <h3>SOMOS
            </h3>
            <div className='textSomos'>
                <p>Una <b>red de colaboradores</b> profesionales de distintas disciplinas, con distintos recorridos y formaciones. Creamos un <b>equipo a medida y comprometido</b>, dependiendo de tus necesidades y problemas a resolver.</p>
            </div>
               <Slider/>
                
            <h4>{somosContent.subtitle}</h4>
            <div className="keywordsSomosContainer">
                <div className='keyContainer'>
                    {keywords.map((keyword, index)=>
                    <span className='keywordsSomos' key={index}>{keyword} </span>
                    )}

                </div>
            </div>

        </div>
    </div>
  )
}
