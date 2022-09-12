import React from 'react'
import { createContext } from 'react'

export const GlobalContextProvider = createContext('');

export const GlobalProvider = ({children}) => {

    let navbarComponents= ['Servicios', 'Marca', 'Contacto']





  return (
    <GlobalContextProvider.Provider value={{}}>
        {children}
    </GlobalContextProvider.Provider>
  )
}
