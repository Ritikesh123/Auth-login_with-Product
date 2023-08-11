import React from 'react'
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div>
        <p>You are successfully logout 😊</p>
       

        <p><Link className='text-blue-700' to="/login">Click here </Link>to login</p>
        
    </div>
  )
}

export default Logout;