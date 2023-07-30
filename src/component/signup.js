import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { Register } from './AxiosApi/FetchCalls';
import axios from 'axios'
import { toast } from 'react-toastify';


function Signup() {
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
            ).required('Required')
    });
    return (
        <div className='card p-5 shadow'>
            <div className="mb-3">
                <h3>CREATE AN ACCOUNT</h3>
            </div>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    axios.post('http://localhost:5000/api/user/register', values)
                        .then((res) => {
                            if (res && res.data) {
                                console.log(res.data);
                                toast.success(res.data);
                                navigate('/login');
                            } else {
                                console.log('Unexpected response:', res);
                                toast.error('Unexpected response from the server.');
                            }
                        })
                        .catch((err) => {
                            if (err && err.response && err.response.data) {
                                const error = err.response.data;
                                console.log(error);
                                toast.error(error);
                            } else {
                                console.log('Error occurred:', err);
                                toast.error('Error occurred while processing the request.');
                            }
                        });
                }}

            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            <div className="form-group my-3">
                                <Field name="firstName" placeholder="First Name" className="form-control" />
                                {errors.firstName && touched.firstName ? (
                                    <div className='h6 text-danger'> {errors.firstName}</div>
                                ) : null}
                            </div>

                            <div className="form-group my-3">
                                <Field className="form-control" placeholder="Last Name" name="lastName" />
                                {errors.lastName && touched.lastName ? (
                                    <div className='h6 text-danger'>{errors.lastName}</div>
                                ) : null}
                            </div>

                            <div className="form-group my-3">
                                <Field name="email" className="form-control" placeholder="Enter email" />
                                {errors.email && touched.email ? (
                                    <div className='h6 text-danger'>{errors.email}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <Field name="password" className="form-control" placeholder="Password" />
                                {errors.password && touched.password ? (
                                    <div className='h6 text-danger'  >{errors.password}</div>
                                ) : null}
                            </div>


                            <button type="submit" onSubmit={onsubmit} className="btn btn-outline-secondary mt-3 mx-2">Signup</button>
                            <Link to="/login" style={{ textDecoration: 'none' }}> <button type="submit" className="btn btn-outline-primary mt-3">login</button> </Link>


                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}

export default Signup