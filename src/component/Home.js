// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'
// import anime from 'animejs'
// import { Link, useNavigate } from 'react-router-dom';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { Formik, Form, Field } from 'formik';
// // import * as Yup from 'yup';
// // // import { Register } from './AxiosApi/FetchCalls';
// // import axios from 'axios'
// // import { toast } from 'react-toastify';
// function Home() {

    
//     const navigate = useNavigate();
//     return (
//         <div style={{ 
//         display: 'flex',
// height:'100%',
// backgroundColor:"#fbe3e8",alignItems:"center"
//          }}>
//             <div style={{ width: '60%',alignItems:"center",margin:'50px'}} >
//                 <img
//                     src='https://img.businessoffashion.com/resizer/_h8NfpNMD-L8pSDH-cOlX478Fh0=/1600x900/filters:format(jpg):quality(70):focal(-5x45:5x55)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/2UDNDDYDAZB57EYGS55VRAW7AQ.jpg'
//                     style={{  width: '100%', 
//                     // minHeight:'100vh'
//                     height:"90%",
//                      }} />
//             </div>
//             <div style={{ width: '40%'}} >
//                 <div className="grid">
// 					<figure className="effect-dexter">
// 						<img src="https://c0.wallpaperflare.com/preview/506/9/180/beautiful-beauty-cute-elegant.jpg" alt="img19" />
// 						<figcaption>
// 							<h2>Try On<span> Make Up</span></h2>
// 							<p  onClick={()=>  navigate('/login')}>Try Here</p>
// 						</figcaption>			
// 					</figure>
					
// 				</div>
//             </div>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
//         </div>
//     )
// }

// export default Home;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';



function Home2() {
    const navigate = useNavigate();
    return (
        <div >
            <div className='row m-5'>
                <div className='col-lg-8 text-dark  mb-5 ' style={{display:'flex', flexDirection:"column"}}>
                    <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/11183032/CtFRRyg7ekq5Jd4jizS2WZ-2-1600x900.jpg?tr=w-1366" className="mt-5" style={{}} alt="Responsive image" />
                </div>
                <div className='col-lg-4 text-dark bg-secondary'>
                
                    <p className='text-white  para m-3' style={{fontSize:'20px'}}> 
                    <h3>Try On Make Up</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum id turpis id porttitor.
                        In eget efficitur enim. Pellentesque fringilla ex vitae est facilisis, nec dignissim metus pellentesque.
                        Nam commodo est maximus arcu tincidunt interdum. In fringilla, sapien ut ultrices gravida, libero dolor auctor enim,
                        ut commodo urna leo ac eros. Suspendisse tristique nibh neque, ut tincidunt sem bibendum feugiat. Fusce imperdiet nisi quis neque bibendum condimentum.
                        Morbi luctus orci nec lectus posuere pretium. Mauris sollicitudin lacus at velit auctor, a eleifend elit interdum. Praesent elit dolor, tempus in tellus id,
                        luctus iaculis tellus. Maecenas molestie tortor at euismod iaculis. In maximus eros ac nulla blandit, in tincidunt est euismod.
                        <button onClick={()=>  navigate('/login')} className='btn btn-dark mt-4'> Continue </button>
                    </p>
                </div>
            </div>

            <MDBContainer fluid className="px-5  prod" style={{marginTop:'20PX'}}>
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