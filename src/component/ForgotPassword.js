import React from 'react'
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function ForgotPassword() {

    const [email, setEmail] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
      // console.log(email)
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/forgot-password', {email})
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/login')
               
            }
        }).catch(err => console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 w-100 ">
      <div className="bg-white p-3 rounded w-50">
        <h4 className='text-dark'>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
    
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control w-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Send
          </button>
          </form>
        
      </div>
    </div>
  )
}

export default  ForgotPassword