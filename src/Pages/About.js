import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className=' container text-center'>
       <hr></hr>
       <h1 style={{fontFamily:"'Peralta', cursive",textShadow:"2px 2px aquamarine"}}  >
       A cocktail is an alcoholic mixed drink. Most commonly, cocktails are either a combination of spirits, or one or more spirits mixed with other ingredients such as tonic water, fruit juice, flavored syrup, or cream. Cocktails vary widely across regions of the world, and many websites publish both original recipes and their own interpretations of older and more famous cocktails.
       </h1>
       <Link to="/">
         <button className='btn btn-outline-secondary'>Cocktails</button>
       </Link>
    </div>
  )
}

export default About