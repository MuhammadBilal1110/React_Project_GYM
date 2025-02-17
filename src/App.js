// import React from 'react';
// import './App.css';
// import Login from './Login';
// import Signup from './Signup/Signup';
// import Home from  './Home/Home';
// import Navbar from "./Navbar";
// import AboutUs from "./AboutUs";
// import FitnessCalculator from './FitnessCalculator';


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ContactUs from './ContactUs';
// function App() {
//   return (
//     <div >
//       <Router>
//         <Navbar />
      
//         <Routes>
//           <Route path="/" element={<Signup/>} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Home" element={<Home />} />
//           <Route path="/AboutUs" element={<AboutUs />} />
//           <Route path="/FitnessCalculator" element={<FitnessCalculator />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//           {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;
import React, { useState, createContext, useContext } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import FitnessCalculator from './FitnessCalculator';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FitnessCalculator" element={<FitnessCalculator />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default App;
