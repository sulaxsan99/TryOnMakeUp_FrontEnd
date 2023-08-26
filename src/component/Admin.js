import React, { useState, useEffect } from 'react'
import './Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
// import Form   from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { Register } from './AxiosApi/FetchCalls';
import axios, { Axios } from 'axios'
import { toast } from 'react-toastify';
function Admin() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectImage, setSelectImage] = useState(null);
    const [AllProducts, setAllProducts] = useState([]);

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [updatepro, setupdatepro] = useState([])
    const [updatepro1, setupdatepro1] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = async (id) => {
        setShow(true);
        try {
            await axios.get(`http://localhost:5000/api/admin/singlePro/${id}`).then((res) => {
                console.log(res.data)
                setupdatepro(res.data.oneproduct)
                setupdatepro1(id)
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }

    }



    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        Available: Yup.number()
            .typeError('Available must be a number')

            .required('Available is required'),
        image: Yup.mixed().required('File is required'),
    });

    const getPRoduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/getAllPoduct');
            if (!response) {
                console.log("no data")
            } else {
                setAllProducts(response.data.allProducts)
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteProduct(id) {
        console.log(id)
        try {
            await axios.delete(`http://localhost:5000/api/admin/deleteProduct/${id}`).then((res) => {
                console.log(res)
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }
    const updateProduct = async () => {

    }

    useEffect(() => {
        getPRoduct();
    }, [])
    return (
        <>
            <div className='admin' style={{}}>
                <div className='container' >
                    <div className='products'>
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
                                            toast.success(res.data);

                                            actions.resetForm();
                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 5000);
                                           
                                            // navigate('/admin')
                                        }).catch((err) => {
                                            console.log(err)
                                            toast.error(err.response.data);
                                        })
                                    } catch (error) {
                                        console.log(error)
                                    }

                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {({ setFieldValue, isSubmitting, resetForm }) => (
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
                        <h1>
                            Products
                        </h1>

                        <MDBContainer fluid className="px-5  prod" style={{ marginTop: '20PX' }}>
                            <MDBRow>

                                {
                                    AllProducts.map((item, index) => (
                                        <MDBCol md="3" className="mb-lg-0" key={item._id}>
                                            <MDBCard className='shadow '>


                                                <MDBCardBody style={{}}>
                                                    <MDBCardImage style={{ height: '100px', width: '100px' }}
                                        
                                                        // src="../../../Backend/products/C7A002BD-0A6E-4146-B260-DDBECF8282C3.PNG"
                                                        src=''
                                                        position="top"
                                                    />
                                                    <div>
                                                        <p>
                                                            {item.name}
                                                        </p>
                                                        <p >
                                                            Available: <span class="fw-bold">{item.Available}</span>
                                                        </p>
                                                        <p className='delete' onClick={() => deleteProduct(item._id)} >Delete</p>
                                                        <Button className='update' onClick={() => handleShow(item._id)} >Update</Button>
                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Update product</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <Formik
                                                                    initialValues={{ name: updatepro.name, Available: updatepro.Available, image: updatepro.image }}
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
                                                                                await axios.put(`http://localhost:5000/api/admin/update/${updatepro1}`, values, {
                                                                                    headers: {
                                                                                        'Content-Type': 'multipart/form-data', // Important for file uploads
                                                                                    },
                                                                                }).then((res) => {
                                                                                    console.log(res)
                                                                                    actions.resetForm();
                                                                                    window.location.reload();

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
                                                                    {({ setFieldValue, isSubmitting, resetForm }) => (
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
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" onClick={handleClose}>
                                                                    Close
                                                                </Button>
                                                                <Button variant="primary" onClick={handleClose}>
                                                                    Save Changes
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </div>

                                                </MDBCardBody>
                                            </MDBCard >
                                        </MDBCol>
                                    ))
                                }



                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Admin