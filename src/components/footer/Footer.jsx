import React from 'react'
import { useContext } from 'react'
import { GlobalContextProvider } from '../../context/GlobalProvider'
import './footerStyles.scss'
import linkedinIcon from "../assets/linkedin.png"


export const Footer = () => {
  const {footerContent} = useContext(GlobalContextProvider)
  const {titles, contacts,links,copy} = footerContent;


  return (
    <div className='footerContainer'>
      <div className="footerContent">
        <div className="footerMain">
            <div className='footerMark'>
              <h1>{titles[0]}</h1>
              <h4>{footerContent.subtitles}</h4>
            </div>
            <div className='footerConversemos'>
                <h3>{titles[1]}</h3>
                {
                  contacts.map((contact, index)=>
                  <p key={index}>{contact}</p>
                  )
                }
            </div>
            <div className='footerSiguenos'>
              <h3>{titles[2]}</h3>
              <a href={links[0]} target="_blank">
                <img src={linkedinIcon} />
              </a>
            </div>
        </div>
       <div className="footerCopy">
         { copy.map((cop,index)=>
          <p key={index}>{cop}</p>
         )

         }
       </div>
      </div>
    </div>
  )
}
