import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export async function Register(params) {
    const navigate= useNavigate();
    axios.post('http://localhost:5000/api/user/register', params)
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
    
}

