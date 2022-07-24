import React from 'react'
import { Link } from 'react-router-dom'
import { goBack } from './back'

const GoBack = () => {
  
  return (
    <Link to="" className="link" onClick={()=> goBack()}>
       {"<"} Go Back 
    </Link>
  )
}

export default GoBack