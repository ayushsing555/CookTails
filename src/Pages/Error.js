import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='container text-center'>
        <h1 style={{color:"red"}}> ERROR PAGE</h1>
        <Link to="/">
            <button className='btn btn-outline-secondary'>Return to home</button>
        </Link>
    </div>
  )
}

export default Error