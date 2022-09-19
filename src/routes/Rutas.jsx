import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
// import { Home } from "../components/content/contentList/home/Home";
import { Layout } from "../components/layout/Layout";
import { Content } from "../components/content/Content";


export const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element= {<Content/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
