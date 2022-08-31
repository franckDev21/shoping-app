import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Pages/All'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/all" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter