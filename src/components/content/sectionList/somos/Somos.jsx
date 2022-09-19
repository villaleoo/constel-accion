import React from 'react'
import { useContext } from 'react'
import { GlobalContextProvider } from '../../../../context/GlobalProvider'
import './somosStyles.scss'

export const Somos = () => {

    const {somosContent}=useContext(GlobalContextProvider);
    const {keywords} = somosContent;
    



  return (
    <div className='somosContainer'>
        <div className='somosContent'>
            <h3>SOMOS</h3>
            <div className='textSomos'>
                <p>{somosContent.text}</p>
            </div>
            <div className='brandSomos'>
                <p>brand</p>
            </div>
            <h4>{somosContent.subtitle}</h4>
            <div className="keywordsSomosContainer">
                <p>
                    {keywords.map((keyword, index)=>
                    <span className='keywordsSomos' key={index}>{keyword} </span>
                    )}

                </p>
            </div>

        </div>
    </div>
  )
}
