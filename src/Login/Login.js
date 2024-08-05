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
//         <p>Already have an account?</p>
//         <Link to="/login">
//           <button className="btn btn-primary">Login</button>
//         </Link>
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
import React from 'react';
import { Link } from 'react-router-dom';

// Define styles for the entire page and login container
const styles = {
  pageContainer: {
    height: '100vh',
    margin: 0,
    backgroundImage: 'url(/Login.jpg)', // Adjust the path as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addusername: {
    width: '25%',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.65)',
  },
  h3: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkcyan',
    textTransform: 'uppercase',
    textShadow: '1px 2px 8px rgba(0, 0, 0, 0.7)',
  },
  inputGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginTop: '10px',
  },
  input: {
    marginTop: '5px',
    padding: '10px',
  },
  button: {
    marginTop: '20px', // Increased margin-top for more space
  },
  btnSuccess: {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px', // Apply margin-top here as well
  },
  btnPrimary: {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px', // Adjust margin-top if needed
  },
};


const Signup = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.addusername}>
        <h3 style={styles.h3}>Login</h3>
        <form className="adduserform">
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Enter Your Email"
              style={styles.input}
            />
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              placeholder="Enter Your Password"
              style={styles.input}
            />
            <button type="submit" style={styles.btnSuccess}>Submit</button>
          </div>
        </form>
        
        <Link to="/login">
          <button style={styles.btnPrimary}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
