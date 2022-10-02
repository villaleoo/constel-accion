import React from 'react'
import { useContext } from 'react'
import { GlobalContextProvider } from '../../../../context/GlobalProvider'
import './creamosStyles.scss'
import brujula from "../../../assets/brujulaCreamos.png";
import telescopio from "../../../assets/telescopioCreamos.png";

export const Creamos = () => {

    const {creamosContent} = useContext(GlobalContextProvider);
   


  return (
    <div className='creamosContainer' id='seccionCreamos'>
        <img className='brujula' src={brujula} />
        <img className='telescopio' src={telescopio}/>
        <div className="creamosContent">
            <div className="creamosHeaders">
                <h3>{creamosContent.title}</h3>
                <h2>{creamosContent.subtitle}</h2>
            </div>
            <div className='creamosTexts'>
              <p> Hoy, y más que nunca, para crear un <b>negocio de valor</b>, debes crear <b>relaciones significativas con las personas</b> (las de fuera, y las de dentro de la compañía).</p>
              <p>
              Esas relaciones significativas se construyen con <b>micro-experiencias conectadas</b>, no aisladas entre sí. Esas micro-experiencias conectadas necesitan ser parte de un mismo sistema narrativo, de una <b>constelación</b>. Y esa constelación diseñada debe <b>llevarse en la acción</b>: no solo encontrarla y crearla, sino también expresarse, transmitirse y vivirse.
              </p>
              <p>
              Por eso, nuestro nombre. Porque colaboramos con start-ups y pymes para que encuentren espacios no explorados, sus propios universos y creen mundos interesantes que conecten su negocio con personas.
              </p>
            </div>
        </div>

    </div>
  )
}
