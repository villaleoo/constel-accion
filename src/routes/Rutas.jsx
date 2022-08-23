import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
// import { Home } from "../components/content/contentList/home/Home";
import { Layout } from "../components/layout/Layout";

export const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
