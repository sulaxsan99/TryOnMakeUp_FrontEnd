import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";


function Products() {
    return (
        <MDBContainer fluid className="my-5">
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

                <MDBCol md="12" lg="4" className="mb-4 mt-4 mb-lg-0">
                    <MDBCard className='shadow'>

                        <MDBCardImage
                            src="https://media.istockphoto.com/id/1268627161/vector/vector-face-cosmetic-makeup-powder-in-black-round-plastic-case-with-mirror-and-applicator.jpg?s=612x612&w=0&k=20&c=R-n0nEnNdvt5XvwtZIhK-A-R8KYJCUZtWi4i1Glb5NQ="
                            position="top"
                        />
                        <MDBCardBody>
                            <div className="d-flex justify-content-between">
                                <p className="small">
                                    Compact Powder
                                </p>

                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">
                                    Available: <span class="fw-bold">20 Pcs</span>
                                </p>
                            </div>
                        </MDBCardBody>
                    </MDBCard >
                </MDBCol>

                <MDBCol md="12" lg="4" className="mb-4 mt-4 mb-lg-0">
                    <MDBCard className='shadow'>

                        <MDBCardImage
                            src="https://m.media-amazon.com/images/I/51lHcta2cTL.jpg"
                            position="top"
                        />
                        <MDBCardBody>
                            <div className="d-flex justify-content-between">
                                <p className="small">
                                    Eye Shadow
                                </p>

                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">
                                    Available: <span class="fw-bold">08 Pcs</span>
                                </p>
                            </div>
                        </MDBCardBody>
                    </MDBCard >
                </MDBCol>

                <MDBCol md="12" lg="4" className="mb-4 mt-4 mb-lg-0">
                    <MDBCard className='shadow'>

                        <MDBCardImage
                            src="https://rubysorganics.in/cdn/shop/products/Mascara.png?v=1646219313"
                            position="top"
                        />
                        <MDBCardBody>
                            <div className="d-flex justify-content-between">
                                <p className="small">
                                    Mascara
                                </p>

                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">
                                    Available: <span class="fw-bold">350 Pcs</span>
                                </p>
                            </div>
                        </MDBCardBody>
                    </MDBCard >
                </MDBCol>


            </MDBRow>

        </MDBContainer >
    );
}

export default Products