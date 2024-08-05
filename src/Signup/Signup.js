import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="addusername">
      <h3>Sign Up</h3>
      <form className="adduserform">
        <div className="InputGroup">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" autoComplete="off" placeholder="Enter Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="off" placeholder="Enter Your Email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="off" placeholder="Enter Your Password" />

          <button type="submit" className="btn btn-success">Signup</button>
        </div>
      </form>
      <div className="login">
        <p>Already have an account?</p>
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
