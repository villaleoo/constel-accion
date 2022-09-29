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
            <h3>Somos
            </h3>
            <div className='textSomos'>
                <p>{somosContent.text}</p>
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
