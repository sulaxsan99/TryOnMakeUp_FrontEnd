import React, { useState } from 'react'
import './Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { Register } from './AxiosApi/FetchCalls';
import axios from 'axios'
import { toast } from 'react-toastify';
function Admin() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectImage, setSelectImage] = useState(null);
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        Available: Yup.number()
            .typeError('Available must be a number')

            .required('Available is required'),
        image: Yup.mixed().required('File is required'),
    });
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectImage(file)
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // const Uploadimage = async () => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('filename', selectImage);
    //         // formData.append('userid', userDetail.user._id);
    //         //   console.log(selectImage)
    //         await axios.post('http://localhost:5000/api/user/upload', formData)
    //             .then((res) => {
    //                 console.log(res.data)
    //             })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return (
        <div className='admin' style={{}}>
            <div className='product'>
                <h1 >Products</h1>
            </div>

            <div className='container' >
                <div className='products' >
                    <h1>
                        Products
                    </h1>

                    <Formik
                        initialValues={{ name: '', Available: '', image: null }}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            // Simulate submitting form data to a server
                            setTimeout(async () => {
                                console.log('Form values:', values);

                                try {
                                    const formData = new FormData();
                                    formData.append('name', values.name);
                                    formData.append('Available', values.Available);
                                    formData.append('image', values.image);
                                    await axios.post('http://localhost:5000/api/admin/', formData, {
                                        headers: {
                                            'Content-Type': 'multipart/form-data', // Important for file uploads
                                        },
                                    }).then((res) => {
                                        console.log(res)
                                    }).catch((err) => {
                                        console.log(err)

                                    })
                                } catch (error) {
                                    console.log(error)
                                }

                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {({ setFieldValue, isSubmitting }) => (
                            <Form className='m-5'>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" id="name" name="name" className="form-control" />
                                    <ErrorMessage name="name" className='h6 text-danger' component="div" />
                                </div>

                                <div>
                                    <label htmlFor="Available">Available</label>
                                    <Field type="number" id="Available" name="Available" className="form-control" />
                                    <ErrorMessage name="Available" className='h6 text-danger' component="div" />
                                </div>

                                <div>
                                    <label htmlFor="image">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            setFieldValue('image', file);
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setSelectedImage(reader.result);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                    <ErrorMessage name="image" className='h6 text-danger' component="div" />
                                </div>

                                {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '200px', marginTop: '10px' }} />}

                                <button type="submit" disabled={isSubmitting} className="btn btn-outline-primary mt-3" >
                                    {isSubmitting ? 'Adding...' : 'Add Product'}
                                </button>
                            </Form>
                        )}
                    </Formik>

                </div>
                <div className='ViewProducts'>
                    form
                </div>
            </div>
        </div>
    )
}

export default Admin