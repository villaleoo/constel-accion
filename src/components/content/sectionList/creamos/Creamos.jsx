import React from 'react'
import { useContext } from 'react'
import { GlobalContextProvider } from '../../../../context/GlobalProvider'
import './creamosStyles.scss'

export const Creamos = () => {

    const {creamosContent} = useContext(GlobalContextProvider);
    const {texts}= creamosContent


  return (
    <div className='creamosContainer' id='seccionCreamos'>
        <div className="creamosContent">
            <div className="creamosHeaders">
                <h3>{creamosContent.title}</h3>
                <h2>{creamosContent.subtitle}</h2>
            </div>
            <div className='creamosTexts'>
                {texts.map((text, index)=>
                    <p key={index}>{text}</p>
                )}
            </div>
        </div>

    </div>
  )
}
