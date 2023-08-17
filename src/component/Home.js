

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';



function Home2() {
    const navigate = useNavigate();
    return (
        <div >
            <div className='row ' >
                <h3 style={{ color: 'black', textAlign: "center", marginTop: '10px', fontWeight: "800" }}>Try On Make Up</h3>
            </div>
            <div className='row ' style={{}}>
                <div className='col-lg-8 text-dark' style={{ display: 'flex', flexDirection: "column", alignItems: "center",height:'90%'}}>
                    <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/11183032/CtFRRyg7ekq5Jd4jizS2WZ-2-1600x900.jpg?tr=w-1366" className="" style={{ height: "90%", width: '100%' }} alt="Responsive image" />
                </div>
                <div className='col-lg-4 text-dark ' style={{ display: 'flex', flexDirection: "column",alignItems:"center",backgroundColor: '#9CA8B2' }}>
                    <div >
                        <p className='text-white  para' style={{ fontSize: '17px', }}>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum id turpis id porttitor.
                            In eget efficitur enim. Pellentesque fringilla ex vitae est facilisis, nec dignissim metus pellentesque.
                            Nam commodo est maximus arcu tincidunt interdum. In fringilla, sapien ut ultrices gravida, libero dolor auctor enim,
                            ut commodo urna leo ac eros. Suspendisse tristique nibh neque, ut tincidunt sem bibendum feugiat. Fusce imperdiet nisi quis neque bibendum condimentum.
                            Morbi luctus orci nec lectus posuere pretium. Mauris sollicitudin lacus at velit auctor, a eleifend elit interdum. Praesent elit dolor, tempus in tellus id,
                            luctus iaculis tellus. Maecenas molestie tortor at euismod iaculis. In maximus eros ac nulla blandit, in tincidunt est euismod.
                         <div>
                         <p onClick={() => navigate('/login')} className='btn btn-dark mt-2'> Continue </p>

                         </div>
                        </p>
                    </div>

                </div>
            </div>

            <MDBContainer fluid className="px-5  prod" style={{ marginTop: '20PX' }}>
                <h1 className='mb-5 text-dark'>Products</h1>
                <MDBRow>

                    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                        <MDBCard className='shadow p-5'>

                            <MDBCardImage style={{ height: '250px', width: '250px' }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06NJPcUDJbB9wdhEXbFdn3nH4fJOTAvYc_C6dXzXs1pBRgEWgmaiwdgz5Ux7AMIC7nPA&usqp=CAU"
                                position="top"
                            />
                            <MDBCardBody>
                                <div className="d-flex justify-content-between">
                                    <p className="small">
                                        Lipstick
                                    </p>

                                </div>

                                <div class="d-flex justify-content-between mb-2">
                                    <p class="text-muted mb-0">
                                        Available: <span class="fw-bold">10 Pcs</span>
                                    </p>
                                </div>
                            </MDBCardBody>
                        </MDBCard >
                    </MDBCol>

                    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                        <MDBCard className='shadow p-5'>

                            <MDBCardImage style={{ height: '250px', width: '250px' }}
                                src="https://images.contentstack.io/v3/assets/bltf10d43c9de06a4a3/bltdd1ccfa7f1eb3431/5e7894298659ab0f4e674456/sm_scandaleyes-bold-eye_black-%E2%80%93-001_1.jpg?auto=webp"
                                position="top"


                            />
                            <MDBCardBody>
                                <div className="d-flex justify-content-between">
                                    <p className="small">
                                        Eye Liner
                                    </p>

                                </div>

                                <div class="d-flex justify-content-between mb-2">
                                    <p class="text-muted mb-0">
                                        Available: <span class="fw-bold">50 Pcs</span>
                                    </p>
                                </div>
                            </MDBCardBody>
                        </MDBCard >
                    </MDBCol>

                    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                        <MDBCard className='shadow p-5'>

                            <MDBCardImage style={{ height: '250px', width: '250px' }}
                                src="https://png.pngtree.com/png-clipart/20230425/original/pngtree-liquid-foundation-makeup-beauty-splash-png-image_9099958.png"
                                position="top"
                            />
                            <MDBCardBody>
                                <div className="d-flex justify-content-between">
                                    <p className="small">
                                        Foundation
                                    </p>

                                </div>

                                <div class="d-flex justify-content-between mb-2">
                                    <p class="text-muted mb-0">
                                        Available: <span class="fw-bold">06 Pcs</span>
                                    </p>
                                </div>
                            </MDBCardBody>
                        </MDBCard >
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className="px-5 mt-5 mb-5">
                <h1 className='my-5 pt-5 text-dark'>Brands</h1>
                <MDBRow>

                    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                        <MDBCard className='shadow p-5'>

                            <MDBCardImage style={{ height: '130px', width: '300px' }}
                                src="https://logos-world.net/wp-content/uploads/2020/12/Maybelline-Logo.png"
                                position="top"


                            />

                        </MDBCard >
                    </MDBCol>

                    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                        <MDBCard className='shadow p-5'>

                            <MDBCardImage style={{ height: '130px', width: '310px' }}
                                src="https://logos-world.net/wp-content/uploads/2020/04/LOreal-Logo.png"
                                position="top"


                            />
                        </MDBCard >
                    </MDBCol>

                    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                        <MDBCard className='shadow p-5'>

                            <MDBCardImage style={{ height: '130px', width: '310px' }}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Revlon_logo.svg/2560px-Revlon_logo.svg.png"
                                position="top"

                            />
                        </MDBCard >
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </div>



    )
}

export default Home2 