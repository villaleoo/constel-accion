import React from 'react'
import { createContext } from 'react'

export const GlobalContextProvider = createContext('');

export const GlobalProvider = ({children}) => {

    let navbarList= ['Hacemos', 'Somos', 'Creamos','Contacto']





  return (
    <GlobalContextProvider.Provider value={{navbarList,}}>
        {children}
    </GlobalContextProvider.Provider>
  )
}
