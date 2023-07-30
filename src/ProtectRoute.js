import React from 'react'
import { Navigate, Route } from "react-router-dom";

const ProtectRoute = ({ component: Component, ...restOfProps }) => {
  const authenticate=  localStorage.getItem("validtoken")
  return (

       <Route
      {...restOfProps}
    
    element={
      authenticate ? <Component /> : <Navigate to="/login" />
    }
      
    />
   
  )
}

export default ProtectRoute
