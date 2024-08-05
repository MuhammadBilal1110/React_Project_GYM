import React from 'react';
import './App.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from  './Home/Home';
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import FitnessCalculator from './FitnessCalculator';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './ContactUs';
function App() {
  return (
    <div >
      <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FitnessCalculator" element={<FitnessCalculator />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;