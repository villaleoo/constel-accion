import React from 'react'
import { useState } from 'react'
import './hacemosStyles.scss'

export const Hacemos = () => {
    const [buttonChecked, setButtonChecked] = useState('investigacion')

    function handleChangeRadio (e) {
        setButtonChecked(e.target.value)
    }


  return (
    <div className='hacemosContainer'>
        <div className='hacemosInputs'>
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value='investigacion' 
                name="radioServicios" 
                id=""
                checked={buttonChecked === 'investigacion' ? true : false}
                onChange={handleChangeRadio} 
            />
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value ='branding' 
                name="radioServicios" 
                id=""
                checked={buttonChecked === 'branding' ? true : false} 
                onChange={handleChangeRadio}  
            />
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value='comunicacion' 
                name="radioServicios" 
                id=""
                checked={buttonChecked === 'comunicacion' ? true : false} 
                onChange={handleChangeRadio}  
            />
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value='innovacion'
                name="radioServicios" 
                id=""
                checked={buttonChecked === 'innovacion' ? true : false}
                onChange={handleChangeRadio}   
            />
            <label htmlFor=""></label>
            <input 
                type="radio"
                value='transformacion' 
                name="radioServicios" 
                id=""
                checked={buttonChecked === 'transformacion' ? true : false}
                onChange={handleChangeRadio}   
            />
        </div>
        <div className='hacemosContent'>
            <h3>HACEMOS</h3>
        { buttonChecked === 'investigacion' &&
        <p>esto es investigacion</p>

        }

        { buttonChecked === 'branding' && 
        <p>esto es branding</p>

        }

        { buttonChecked === 'comunicacion' &&
        <p>esto es comunicacion</p>

        }

        { buttonChecked === 'innovacion' &&
        <p>esto es innovacion</p>

        }
        { buttonChecked === 'transformacion' &&
        <p>esto es transformacion</p>

        }
        </div>
    </div>
  )
}
