import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { GlobalContextProvider } from '../../../../context/GlobalProvider'
import './hacemosStyles.scss'

export const Hacemos = () => {
    const [buttonChecked, setButtonChecked] = useState('Investigacion');
    const {serviceList, serviceContent} = useContext(GlobalContextProvider);



    function handleChangeRadio (e) {
        setButtonChecked(e.target.value)
    }

   

  return (
    <div className='hacemosContainer'>
      
        <div className='hacemosInputs'>
            {   serviceList.map((serviceItem, index)=>
            
            <div className='inputsContainer'>
                <input
                    key={`input${index}`}
                    type='radio'
                    value={serviceItem}
                    name='radioServices'
                    id={`serviceInput${index}`}
                    checked={buttonChecked === serviceItem ? true : false}
                    onChange={handleChangeRadio}
                
                />
                <label key={`label${index}`} htmlFor={`serviceInput${index}`}>{
                    serviceItem === "Comunicacion" ? 
                    <p id='textInput2'>Comunicación & contenido</p>
                    :
                    <p id={`textInput${index}`}>{serviceItem}</p>
                }</label>
            </div>
                
            
            )
            }
        </div>
        <div className='hacemosContent'>
            <h3>HACEMOS</h3>
            {

                serviceContent.map((serviceActive, index)=>
                buttonChecked === serviceContent[index].service && 
                
                <>
                    <h2 key={index}>{`${serviceContent[index].title}`}</h2>
                    <p key={index}>
                        {`${serviceContent[index].text}`}
                    </p>
                    <p className="keywords" key={index}>{serviceContent[index].keywords}</p>
                </>
                
                )
            }
        </div>
    </div>
  )
}
