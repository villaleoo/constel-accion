import React from 'react'
import { useState } from 'react'
import './serviciosStyles.scss'

export const Servicios = () => {
    const [buttonChecked, setButtonChecked] = useState('investigacion')

    function handleChangeRadio (e) {
        setButtonChecked(e.target.value)
    }


  return (
    <div>
        <div>
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value='investigacion' 
                name="radioServicios" 
                id=""
                checked={buttonChecked == 'investigacion' ? true : false}
                onChange={handleChangeRadio} 
            />
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value ='branding' 
                name="radioServicios" 
                id=""
                checked={buttonChecked == 'branding' ? true : false} 
                onChange={handleChangeRadio}  
            />
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value='comunicacion' 
                name="radioServicios" 
                id=""
                checked={buttonChecked == 'comunicacion' ? true : false} 
                onChange={handleChangeRadio}  
            />
            <label htmlFor=""></label>
            <input 
                type="radio" 
                value='innovacion'
                name="radioServicios" 
                id=""
                checked={buttonChecked == 'innovacion' ? true : false}
                onChange={handleChangeRadio}   
            />
            <label htmlFor=""></label>
            <input 
                type="radio"
                value='transformacion' 
                name="radioServicios" 
                id=""
                checked={buttonChecked == 'transformacion' ? true : false}
                onChange={handleChangeRadio}   
            />
        </div>
    </div>
  )
}
