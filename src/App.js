import './App.css';
import { BrowserRouter as Router, Route,Switch,Routes } from 'react-router-dom';
import Login from './component/login';
import Signup from './component/signup';
import Landing from './component/landing';
import Products from './component/products';
import Home from './component/Home';
import { ToastContainer, toast } from 'react-toastify';
import Admin from './component/Admin';
import 'react-toastify/dist/ReactToastify.css';
import ProtectRoute from './ProtectRoute';
// import 'react-hot-toast/dist/index.css'; // Import the CSS for toast styles


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* <Route index element={<Login />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            {/* <ProtectRoute path="/home"   component={<Landing />} />
            <ProtectRoute path="/products" component={<Products />} /> */}
            <Route  path="/" element={<Home />} />
          </Routes>
        </Router>
        <ToastContainer />  
      </header>
    </div>
  );
}

export default App;