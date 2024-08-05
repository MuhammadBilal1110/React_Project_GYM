import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Welcome To Our GYM Center. "Unlock Your Potential: Transform Your Body and Mind at Our Gym Center!"</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">AboutUs </Link>
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
