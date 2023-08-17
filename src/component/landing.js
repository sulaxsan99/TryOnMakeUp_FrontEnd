/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import lipstic from './assests/LIPSTICK.PNG';
import blushpic from './assests/blush.PNG'
import Chatbot from './Chatbot';

function Landing() {
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState(null);
    const [userId, setUserId] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectImage, setSelectImage] = useState(null);
    const [result, setResult] = useState(null)
    const [lipstick1, setlipstick1] = useState(null);
    const [lipstick2, setlipstick2] = useState(null);
    const [lipstick3, setlipstick3] = useState(null);
    const [blush, setblushColor] = useState(null)

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
            const response = await axios.post(' http://78ed-34-91-120-226.ngrok.io/makeup', formData, { responseType: 'blob', })

            const blob = new Blob([response.data], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);
            setResult(imageUrl)



            const re = await axios.post(' http://78ed-34-91-120-226.ngrok.io/makeup2', formData)
            console.log("respons reee----", re);


            const lipg = `rgb(${re.data.lipr1},${re.data.lipg1},${re.data.lipb1})`;
            const lipb = `rgb(${re.data.lipr2},${re.data.lipg2},${re.data.lipb2})`;
            const lipr = `rgb(${re.data.lipr3},${re.data.lipg3},${re.data.lipb3})`;
            const rush = `rgb(${re.data.blushR},${re.data.blushG},${re.data.blushB})`;

            setlipstick1(lipg)
            setlipstick2(lipb)
            setlipstick3(lipr)
            setblushColor(rush)
            // console.log(lip)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <MDBContainer fluid >
            <nav class="navbar bg-dark-subtle mb-5 ">
                <form class="container-fluid justify-content-around ">
                    <h1 className=' my-1 text-dark'>Try On MakeUp</h1>
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
                                    <div className="title m-2">
                                        {selectedImage && (
                                            <img
                                                src={selectedImage}
                                                alt="Preview"
                                                style={{ maxWidth: '100%', maxHeight: '500px' }}
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
                    <MDBCard className='shadow m-2'>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="title ">
                                <h1>Lipstick Colors</h1>
                            </div>
                            <div className=" " style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >

                                <div className="center card shadow m-1">


                                    <div className="dropzone ">

                                        <img src={lipstic} style={{ height: '180px', width: '180px', backgroundColor: lipstick1 }} />
                                    </div>
                                    {/* <Link to="/products" style={{ textDecoration: 'none' }}> <button className="btn btn-outline-dark mt-3 mx-2">More Products</button> </Link> */}
                                </div>
                                <div className="center card shadow m-1 ">

                                    <div className="dropzone ">

                                        <img src={lipstic} style={{ height: '180px', width: '180px', backgroundColor: lipstick2 }} />
                                    </div>
                                    {/* <Link to="/products" style={{ textDecoration: 'none' }}> <button className="btn btn-outline-dark mt-3 mx-2">More Products</button> </Link> */}
                                </div>
                                <div className="center card shadow m-1">

                                    <div className="dropzone ">

                                        <img src={lipstic} style={{ height: '180px', width: '180px', backgroundColor: lipstick3 }} />
                                    </div>
                                    {/* <Link to="/products" style={{ textDecoration: 'none' }}> <button className="btn btn-outline-dark mt-3 mx-2">More Products</button> </Link> */}
                                </div>
                            </div>
                        </div>



                    </MDBCard >


                    <MDBCard className='m-2'>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                            <div className="title ">
                                <h1>Blush Colors</h1>
                            </div>
                            <div className="center card shadow m-1">

                                <div className="dropzone ">

                                <img src={blushpic} style={{ height: '180px', width: '180px', backgroundColor: blush }} />
                                </div>
                                {/* <Link to="/products" style={{ textDecoration: 'none' }}> <button className="btn btn-outline-dark mt-3 mx-2">More Products</button> </Link> */}
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>

            </MDBRow >
<Chatbot />
        </MDBContainer >


    )
}

export default Landing