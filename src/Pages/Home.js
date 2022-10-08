import React from 'react'
import { Context } from '../Context'
import Navbar from '../Navbar'
import SearchBar from '../component/SearchBar'
import CookTails from "../component/CookTails"
const Home = () => {
  return (
    <>
        
         <h1 className='text-center m-3' style={{fontFamily:"'Peralta', cursive",color:"green"}}>COOKTAILS</h1>
          <Navbar/>
          <SearchBar/>
         <CookTails/>
    </>
        

  )
}

export default Home