import React from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams,useLocation } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
function ResetPassword() {
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get('id');
  const token = queryParams.get('token');
  // const { id, token } = useParams()


  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      ).required('Required')
  });
  axios.defaults.withCredentials = true;

console.log(id)

console.log(token)

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 w-100">
      <div className="bg-white p-3 rounded w-25">
        <h4 className='text-dark'>Reset Password</h4>


        <Formik
          initialValues={{
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            console.log(values)
       
              axios.post(`http://localhost:5000/api/user/reset-password/${id}/${token}`, values)
                .then(res => {
                  // if (res.data.Status === "Success") {
                  //   navigate('/login')
                  // }
                  toast.success(res.data);
                  console.log(res)
                  navigate('/login')
                }).catch(err => {
                  console.log(err.response)
                  console.log(err.response.data)
                  toast.error(err.response.data);
                })
            }
          }
        >

          {
            ({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <Field name="password" className="form-control" placeholder="Password" />
                  {errors.password && touched.password ? (
                    <div className='h6 text-danger'  >{errors.password}</div>
                  ) : null}
                </div>


                <div className="form-group">
                  <button type="submit" onSubmit={onsubmit} className="btn btn-outline-primary mt-3">Update</button>
                </div>

              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default ResetPassword;