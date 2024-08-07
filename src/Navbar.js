// import React from 'react';
// import './Navbar.css';
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Welcome To Our GYM Center. "Unlock Your Potential"</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/AboutUs">AboutUs </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/FitnessCalculator">FitnessCalculator</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/ContactUs">ContactUs</Link>
//             </li>
           
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React from 'react';
// import './Navbar.css';
// import { Link } from "react-router-dom";
// // import logo from './Logo.png'; // Ensure this path is correct

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="#">
//           <img src={'logo.png'} alt="Logo" className="navbar-logo" />
//           <span className="navbar-text">Welcome To Our GYM Center. "Unlock Your Potential"</span>
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/AboutUs">AboutUs</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/FitnessCalculator">FitnessCalculator</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/ContactUs">ContactUs</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import logo from './Logo.jpg'; // Ensure this matches the file name

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="#">
//           <img src={logo} alt="Logo" className="navbar-logo" />
//         </Link>
//         <span className="navbar-text">Welcome To Our GYM Center. "Unlock Your Potential"</span>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/AboutUs">AboutUs</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/FitnessCalculator">FitnessCalculator</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/ContactUs">ContactUs</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './Logo.jpg'; // Ensure this matches the file name

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <span className="navbar-text d-none d-lg-block">Welcome To Our GYM Center. "Unlock Your Potential"</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">AboutUs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FitnessCalculator">FitnessCalculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">ContactUs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
