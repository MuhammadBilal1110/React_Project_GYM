// import React from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   return (
//     <div className="addusername">
//       <h3>Login</h3>
//       <form className="adduserform">
//         <div className="InputGroup">
//           {/* <label htmlFor="name">Name</label>
//           <input type="text" id="name" autoComplete="off" placeholder="Enter Your Name" /> */}

//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" autoComplete="off" placeholder="Enter Your Email" />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" autoComplete="off" placeholder="Enter Your Password" />

//           <button type="submit" className="btn btn-success">Submit Know</button>
//         </div>
//       </form>
//       <div className="login">
      
        
//       </div>
//     </div>
//   );
// };

// export default Signup;
// import React from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   return (
//     <div className="addusername">
//       <h3>Login </h3>
//       <form className="adduserform">
//         <div className="InputGroup">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" autoComplete="off" placeholder="Enter Your Email" />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" autoComplete="off" placeholder="Enter Your Password" />

//           <button type="submit" className="btn btn-success">Submit</button>
//         </div>
//       </form>

//         <p>Already have an account?</p>
//         <Link to="/login">
//           <button className="btn btn-primary">Login</button>
//         </Link>
    
//     </div>
//   );
// };

// export default Signup;
// import React,{useState,useNavigate} from 'react';
// import { Link } from 'react-router-dom';

// // Define styles for the entire page and login container
// const styles = {
//   pageContainer: {
//     height: '100vh',
//     margin: 0,
//     // backgroundImage: 'url(/Login.jpg)', // Adjust the path as needed
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addusername: {
//     width: '25%',
//     backgroundColor: 'white',
//     padding: '40px',
//     borderRadius: '10px',
//     boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.65)',
//   },
//   h3: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'darkcyan',
//     textTransform: 'uppercase',
//     textShadow: '1px 2px 8px rgba(0, 0, 0, 0.7)',
//   },
//   inputGroup: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   label: {
//     marginTop: '10px',
//   },
//   input: {
//     marginTop: '5px',
//     padding: '10px',
//   },
//   button: {
//     marginTop: '20px', // Increased margin-top for more space
//   },
//   btnSuccess: {
//     display: 'block',
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#28a745',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '20px', // Apply margin-top here as well
//   },
//   btnPrimary: {
//     display: 'block',
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#007bff',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '10px', // Adjust margin-top if needed
//   },
// };


// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const storedName = localStorage.getItem("Name");
//     const storedPassword = localStorage.getItem("Password");
//     const storedEmail = localStorage.getItem("Email");

//     if (email === storedEmail && password === storedPassword) {
//       alert("Login Successful!");
//       // Here you would typically handle the login logic, e.g., redirect to dashboard
//       navigate("/dashboard"); // Replace with the actual route to your dashboard
//     } else {
//       alert("Invalid Email or Password.");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-form">
        
//         <form onSubmit={handleSubmit}>
//         <img src="https://images.stockcake.com/public/2/d/9/2d9e381e-df3f-428b-bde9-8dea09e093b1_large/evening-cooking-session-stockcake.jpg" alt="Sample photo" style={{ width: '100%', borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }} />
//         <br/>
//         <h2>Login</h2>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="form-control"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="form-control"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button type="submit" className="signup-button">Login</button>
//         </form>
//         <div className="nav-link">
//           Don't have an account? <a href="/">Sign Up here</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//   return (
//     <div className="addusername">
//       <h3>Sign Up</h3>
//       <form className="adduserform">
//         <div className="InputGroup">
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" autoComplete="off" placeholder="Enter Your Name" />

//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" autoComplete="off" placeholder="Enter Your Email" />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" autoComplete="off" placeholder="Enter Your Password" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h3>Login</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="InputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Enter Your Email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
