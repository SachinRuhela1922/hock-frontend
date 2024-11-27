import { Routes, Route } from 'react-router-dom';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Home from './component/Home.jsx';
import Appointment from './component/Appointment.jsx'
import Career from './component/Navbars/Career.jsx';
import CareerNav from './component/Navbars/CareerNav.jsx';


function App() {
    return (
        
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/careernav" element={<CareerNav />} />
                    
                    
                    <Route path="*" element={<div>Page not found</div>} />
                    
                </Routes>
            </div>
        
    );
}

export default App;
