import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import anime from 'animejs'
import { Link, useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// // import { Register } from './AxiosApi/FetchCalls';
// import axios from 'axios'
// import { toast } from 'react-toastify';
function Home() {

    
    const navigate = useNavigate();
    return (
        <div style={{ 
        display: 'flex',
height:'100%',
backgroundColor:"#fbe3e8",alignItems:"center"
         }}>
            <div style={{ width: '60%',alignItems:"center",margin:'50px'}} >
                <img
                    src='https://img.businessoffashion.com/resizer/_h8NfpNMD-L8pSDH-cOlX478Fh0=/1600x900/filters:format(jpg):quality(70):focal(-5x45:5x55)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/2UDNDDYDAZB57EYGS55VRAW7AQ.jpg'
                    style={{  width: '100%', 
                    // minHeight:'100vh'
                    height:"90%",
                     }} />
            </div>
            <div style={{ width: '40%'}} >
                <div className="grid">
					<figure className="effect-dexter">
						<img src="https://c0.wallpaperflare.com/preview/506/9/180/beautiful-beauty-cute-elegant.jpg" alt="img19" />
						<figcaption>
							<h2>Try On<span> Make Up</span></h2>
							<p  onClick={()=>  navigate('/login')}>Try Here</p>
						</figcaption>			
					</figure>
					
				</div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        </div>
    )
}

export default Home;