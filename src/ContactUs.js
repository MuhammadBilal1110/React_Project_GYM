// import React from 'react'
// import { Link } from 'react-router-dom';
// const ContactUs = () => {
//   const styles = {
//     body: {
//       fontFamily: 'Arial, sans-serif',
//       backgroundImage: 'url(Contact.jpg)', // Ensure this path is correct
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       display: 'flex',
//       justifyContent: 'flex-end', // Aligns items to the end (right)
//       alignItems: 'center',
//       height: '100vh',
//       margin: 0,
//       padding: '20px', // Optional: Adds padding around the form
//     },
//     container: {
//       maxWidth: '400px',
//       padding: '20px',
//       backgroundColor: 'transparent', // Remove background color
//       borderRadius: '5px',
//       boxShadow: '0 2px 4px wheat', // Optional: Add shadow for better visibility
//     },
//     h1: {
//       textAlign: 'center',
//       color: 'white',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '10px',
//       color: 'white', // Change label text color to white
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       marginBottom: '20px',
//       border: '1px solid black',
//       borderRadius: '3px',
//       color: 'white', // Change input and textarea text color to white
//       backgroundColor: 'transparent', // Transparent background for inputs
//     },
//     textarea: {
//       width: '100%',
//       padding: '10px',
//       marginBottom: '20px',
//       border: '1px solid black',
//       borderRadius: '3px',
//       color: 'transparent', // Change textarea text color to white
//       backgroundColor: 'transparent', // Transparent background for textarea
//     },
//     button: {
//       display: 'block',
//       width: '100%',
//       padding: '12px',
//       backgroundColor: '#007bff',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//     buttonHover: {
//       backgroundColor: '#0056b3',
//     },
//   };

//   return (
//     <div style={styles.body}>
//       <div style={styles.container}>
//         <h1 style={styles.h1}>Contact Us</h1>
//         <form action="contactform.php" method="post">
//           <label htmlFor="name" style={styles.label}>Name:</label>
//           <input type="text" id="name" name="name" required style={styles.input} />
//           <label htmlFor="email" style={styles.label}>Email:</label>
//           <input type="email" id="email" name="email" required style={styles.input} />
//           <label htmlFor="message" style={styles.label}>Message:</label>
//           <textarea id="message" name="message" required style={styles.textarea} />
//           <button
//             type="submit"
//             style={styles.button}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url(Contact.jpg)', // Ensure this path is correct
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'flex-end', // Aligns items to the end (right)
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      padding: '20px', // Optional: Adds padding around the form
    },
    container: {
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Optional: Add shadow for better visibility
    },
    h1: {
      textAlign: 'center',
      color: 'white',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      color: 'white', // Change label text color to white
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid white',
      borderRadius: '3px',
      color: 'white', // Change input and textarea text color to white
      backgroundColor: 'transparent', // Transparent background for inputs
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid white',
      borderRadius: '3px',
      color: 'white', // Change textarea text color to white
      backgroundColor: 'transparent', // Transparent background for textarea
    },
    button: {
      display: 'block',
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedMessage = localStorage.getItem('message');
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedMessage) setMessage(savedMessage);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    
    // Display a success message or clear the form
    alert('Message submitted successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            required
            style={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
