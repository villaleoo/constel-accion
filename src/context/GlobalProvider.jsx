import React from 'react'
import { createContext } from 'react'

export const GlobalContextProvider = createContext('');

export const GlobalProvider = ({children}) => {

    let navbarList= ['Hacemos', 'Somos', 'Creamos','Contacto'];

    let serviceList= ['Investigacion', 'Branding', 'Comunicacion', 'Innovacion', 'Transformacion' ];

    let serviceContent= [
      {
        service:'Investigacion',
        title:`Investigación`,
        text:` Para entender, explorar y descubrir consumos, contextos, necesidades y comportamientos, y convertir esos aprendizajes en acciones que diferencien, acerquen y hagan crecer a tu negocio.
      Usamos técnicas mixtas que mejor se adapten a la necesidad y desafio de investigacion.`,
        keywords: `Consumos • Mercado • Cultura • Problemas & Oportunidades • Deseos y necesidades • Segmentos y arquetipos • Salud de marca • Validaciones •`,
      },
      {
        service:'Branding',
        title:`Estrategia y diseño de marca`,
        text:` Para hacer diferente, relevante  mas competitiva la propuesta de tu marca, sea en su creación o para su actualización.
        Definimos, diseñamos y creamos el enfoque estratégico y los elementos de la experiencia de marca para impulsar el crecimiento y desarrollo de tu negocio.`,
        keywords:`Propuestas de valor • Propósito de marca • Conceptos • Punto de vista • Valores y pilares • Manuales de voz, tono y estilo • Universos virtuales y verbales • Experiencias de marca off/on/hibridas •`
      },
      {
        service:'Comunicacion',
        title:`Estrategias de comunicacion y contenido`,
        text:` Para transmitir y hacer llegar los mensajes de tu marca de manera clara, diferente y consistente, en los términos y condiciones de los consumidores.
        Definimos y creamos, con estrategia y creatividad, la comunicacion y contenidos de tu marca, para que conecte con ellos y se obtengan mejores resultados.`,
        keywords:`Conceptos de comunicación • Arquitectura de mensajes • Pilares & manuales de contenido y moderación • Ecosistema & roles de canales • Estrategias de segmentación • Growth Marketing • Inbound Marketing • Campañas publicitarias • Contenido creativo •`

      },
      {
        service:'Innovacion',
        title:'Innovación de negocio, productos y servicios',
        text:` Para crear y/o evolucionar en un contexto que necesita continua actualización y en el que los consumidores son más exigentes y menos leales.
        Colaboramos en encontrar, crear y llevar a la vida nuevas fuentes de crecimiento de negocio que respondan a necesidades y deseos reales de los consumidores.`,
        keywords:`Exploración de oportunidades y problemas • Territorios de innovación • Ideas y conceptos de productos, servicios y experiencias • Modelos de negocio y relacionamiento • Customer Journeys & Blueprints de compra y uso • Validaciones • Roadmaps y project pianning •`,
      },
      {
        service:'Transformacion',
        title:`Workshops transformativos`,
        text:`Para pensar juntos de manera estrategica, unir fuerzas e ideales en resolver problemas, crear los próximos planes estratégicos, verbalizar el propósito y valores de la organización, priorizar temas y proyectos, o lo que se necesite hacer.
        Acompañamos e impulsamos a los equipos a ir más allá de lo de toda la vida y del confort, sin dejar de estar alineados a la estrategia del negocio y a los consumidores.`,
        keywords:`Talleres de co-reflexión y co-ideación • Encuentros transformativos • Sesiones de alineación estratégica • Retrospectivas • Sesiones de priorización y consenso • Formaciones •`,
      }
    ]


    let somosContent= {
      text:"Somos una red de colaboradores profesionales de distintas disciplinas, con distintos recorridos y formaciones. Creamos un equipo a medida y comprometido,dependiendo de tus necesidades y problemas a resolver.",
      subtitle:"Tenemos experiencia en distintos mercados e industrias",
      keywords:["Alimentos","Bebidas", "Hogar", "Higiene & Belleza", "Banca & Finanzas", "Seguros", "Turismo", "Telecomunicaciones", "Medios de comunicación", "Retail", "Electrodomésticos", "Lujo", "Servicios profesionales", "Textil", "Transporte" ],

    }

  return (
    <GlobalContextProvider.Provider value={{navbarList,serviceList, serviceContent, somosContent}}>
        {children}
    </GlobalContextProvider.Provider>
  )
}
