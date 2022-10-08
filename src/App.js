import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About"
import Error from "./Pages/Error";
import Navbar from './Navbar';
import CookTail from './component/CookTail';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cooktail/:id" element={<CookTail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App