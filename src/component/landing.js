/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



function Landing() {
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState(null);
    const [userId, setUserId] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectImage, setSelectImage] = useState(null);
    const [result, setResult] = useState(null)



    useEffect(() => {
        console.log(localStorage.getItem("validtoken"))
        axios.get('http://localhost:5000/api/user/detail', { headers: { makeover: localStorage.getItem("validtoken") } })
            .then((res) => {
                console.log(res.data)
                setUserDetail(res.data)

            }).catch((err) => {
                console.log(err);
            });
    }, [])

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
    const Uploadimage = async () => {
        try {
            const formData = new FormData();
            formData.append('filename', selectImage);
            formData.append('userid', userDetail.user._id);
            //   console.log(selectImage)
            await axios.post('http://localhost:5000/api/user/upload', formData)
                .then((res) => {
                    console.log(res.data)
                })
        } catch (error) {
            console.error(error);
        }
    }
    const getResults = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectImage);
            const response = await axios.post('http://f736-35-197-93-16.ngrok.io/makeup', formData)
            const blob = new Blob([response.data], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);
            setResult(imageUrl)

        } catch (error) {
            console.log(error)
        }
    }
    const isBase64 = (str) => {
        try {
            return btoa(atob(str)) === str;
        } catch (err) {
            return false;
        }
    };
    const normalizeBase64Data = (data) => {
        const base64Prefix = 'data:image/jpeg;base64,';
        if (data.startsWith(base64Prefix)) {
            return data.slice(base64Prefix.length);
        } else {
            return data;
        }
    };
    return (

        <MDBContainer fluid >
            <nav class="navbar bg-dark-subtle mb-5 ">
                <form class="container-fluid justify-content-around ">
                    <h1 className=' my-1 text-dark'>Image Processing</h1>
                    <button class="btn btn-sm btn-outline-dark" type="button" onClick={() => {
                        localStorage.clear();
                        navigate('/')
                    }} >Log out</button>
                </form>
            </nav>
            <MDBRow>
                <MDBCol md="12" lg="8" className="mb-4">
                    <MDBCard className=' p-1 '>
                        <div className="center card p-5 shadow">

                            <div className="title ">

                                <div className="dropzone text-center m-5">
                                    <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon mx-3" />
                                    <input type="file" className="upload-input btn btn-outline-dark" onChange={handleImageChange} />
                                </div>
                                <button type="button" className="btn btn-outline-dark mt-4 " name="uploadbutton" onClick={Uploadimage}>Upload file</button>
                            </div>


                        </div>
                    </MDBCard >
                </MDBCol>

                <MDBCol md="12" lg="4" className="mb-4">
                    <MDBCard className='shadow'>

                        <div>
                            <div className="frame ">
                                <div className="center card  shadow" style={{ minHeight: '308px' }} >
                                    <div className="title m-5">
                                        {selectedImage && (
                                            <img
                                                src={selectedImage}
                                                alt="Preview"
                                                style={{ maxWidth: '400px', maxHeight: '500px' }}
                                            />
                                        )}
                                    </div>

                                    <div className="dropzone">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </MDBCard >
                </MDBCol>

                <MDBCol md="12" lg="12" className="mb-4">
                    <MDBCard className='shadow '>
                        <div>
                            <div className="frame ">
                                <div className="center card  m-1 shadow">

                                    <div className="pb-4">
                                        <button type="button" className="btn btn-outline-dark mt-4 " onClick={getResults}>Generate Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </MDBCard >
                </MDBCol>

                <MDBCol md="12" lg="6" className="mb-5">
                    <MDBCard className='shadow '>
                        <div>
                            <div className="frame ">
                                <div className="center card p-5  m-1 shadow">
                                    <div className="title m-5 pb-5">
                                        <h1>View Processed Image</h1>
                                        {
                                            console.log(result)
                                        }
                                        {result && (
                                            <img
                                                // src={`data:image/jpeg;base64,${result}`}
                                                src={result}
                                                alt="Preview"
                                                style={{ maxWidth: '400px', maxHeight: '500px' }}
                                            />
                                        )}
                                    </div>

                                    <div className="dropzone pb-5 mb-2">
                                        <button type="button" className="btn btn-outline-dark mt-4 ">Download Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </MDBCard >
                </MDBCol>

                <MDBCol md="12" lg="6" className="mb-5 " >
                    <MDBCard className='shadow'>

                        <div>
                            <div className="frame " >
                                <div className="center card p-5 m-1 shadow">
                                    <div className="title pb-2">
                                        <h1>Lipstick</h1>
                                    </div>

                                    <div className="dropzone ">
                                        <MDBCardImage style={{ height: '250px', width: '250px' }}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06NJPcUDJbB9wdhEXbFdn3nH4fJOTAvYc_C6dXzXs1pBRgEWgmaiwdgz5Ux7AMIC7nPA&usqp=CAU"
                                            position="top"
                                        />
                                    </div>
                                    <Link to="/products" style={{ textDecoration: 'none' }}> <button className="btn btn-outline-dark mt-3 mx-2">More Products</button> </Link>
                                </div>
                            </div>
                        </div>



                    </MDBCard >
                </MDBCol>

            </MDBRow >

        </MDBContainer >


    )
}

export default Landing