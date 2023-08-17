import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { Register } from './AxiosApi/FetchCalls';
import axios from 'axios'
import { toast } from 'react-toastify';
function Login() {

    const navigate = useNavigate();
    const LoginSchema = Yup.object().shape({
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
                <h3>LOGIN</h3>
            </div>


            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    console.log(values)

                    if (values.email === "admin@gmail.com" && values.password === "S12345678s@") {
                        navigate('/admin');
                    } else {
                        axios.post('http://localhost:5000/api/user/login', values).then((res) => {
                            if (res && res.data) {
                                localStorage.setItem("validtoken", res.data.userToken)
                                console.log(res.data.message);
                                toast.success(res.data.message);
                                navigate('/landing');

                            } else {
                                console.log('Unexpected response:', res);
                                toast.error('Unexpected response from the server.');
                            }
                        }).catch((err) => {
                            if (err && err.response && err.response.data) {
                                const error = err.response.data;
                                console.log(error);
                                toast.error(error);
                            } else {
                                console.log('Error occurred:', err);
                                toast.error('Error occurred while processing the request.');
                            }
                        });
                    }



                }}
            >

                {
                    ({ errors, touched }) => (
                        <Form>
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


                            <div className="form-group">
                                <button type="submit" onSubmit={onsubmit} className="btn btn-outline-primary mt-3">login</button>
                                <Link to="/signup" style={{ textDecoration: 'none' }}> <button type="submit" href="signup" className="btn btn-outline-secondary mt-3 mx-2">Signup</button> </Link>
                            </div>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}

export default Login;