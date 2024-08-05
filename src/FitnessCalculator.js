// import React from 'react';
// import './FitnessCalculator.css';
// import { Link } from 'react-router-dom';
// const FitnessCalculator = () => {
//   const style = {
//     body: {
//       fontFamily: 'Arial, sans-serif',
//       backgroundImage: 'url(FitnessCalculator.jpg)', // Replace with your image path
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       margin: 0,
//       padding: 0,
//       height: '100vh',
//     },
//     fitnessCalculator: {
//       width: '400px', // Adjust width as needed
//       position: 'fixed', // Fixed positioning on the left
//       left: 0,
//       top: '50%',
//       transform: 'translateY(-50%)',
//       backgroundColor: 'transparent', // Semi-transparent white background
//       padding: '20px',
//       boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', // Optional shadow for better visibility
//     },
//     h1: {
//       textAlign: 'center',
//       color: 'white',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '10px',
//       color: 'blue',
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       marginBottom: '20px',
//       border: '1px solid #ccc',
//       borderRadius: '3px',
//     },
//     button: {
//       display: 'block',
//       width: '100%',
//       padding: '10px',
//       backgroundColor: '#007bff',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '3px',
//       cursor: 'pointer',
//     },
//     buttonHover: {
//       backgroundColor: '#0056b3',
//     },
//   };

//   return (
//     <div style={style.body}>
//       <div className="fitness-calculator" style={style.fitnessCalculator}>
//         <h1 style={style.h1}>Fitness Calculator</h1>
//         <form id="fitnessForm">
//           <label htmlFor="weight" style={style.label}>Weight (kg):</label>
//           <input type="number" id="weight" name="weight" required style={style.input} />
//           <label htmlFor="height" style={style.label}>Height (cm):</label>
//           <input type="number" id="height" name="height" required style={style.input} />
//           <label htmlFor="age" style={style.label}>Age:</label>
//           <input type="number" id="age" name="age" required style={style.input} />
//           <button
//             type="submit"
//             style={style.button}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = style.buttonHover.backgroundColor)}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = style.button.backgroundColor)}
//           >
//             Calculate BMI
//           </button>
//         </form>
//         {/* Display results here if needed */}
//       </div>
//     </div>
//   );
// };

// export default FitnessCalculator;

import React, { useState, useEffect } from 'react';
import './FitnessCalculator.css';
import { Link } from 'react-router-dom';

const FitnessCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const style = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url(FitnessCalculator.jpg)', // Replace with your image path
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      margin: 0,
      padding: 0,
      height: '100vh',
    },
    fitnessCalculator: {
      width: '400px', // Adjust width as needed
      position: 'fixed', // Fixed positioning on the left
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent', // Semi-transparent white background
      padding: '20px',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', // Optional shadow for better visibility
    },
    h1: {
      textAlign: 'center',
      color: 'white',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      color: 'blue',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    },
    button: {
      display: 'block',
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  useEffect(() => {
    const savedWeight = localStorage.getItem('weight');
    const savedHeight = localStorage.getItem('height');
    const savedAge = localStorage.getItem('age');
    if (savedWeight) setWeight(savedWeight);
    if (savedHeight) setHeight(savedHeight);
    if (savedAge) setAge(savedAge);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    localStorage.setItem('age', age);
    // Perform BMI calculation or other actions here
  };

  return (
    <div style={style.body}>
      <div className="fitness-calculator" style={style.fitnessCalculator}>
        <h1 style={style.h1}>Fitness Calculator</h1>
        <form id="fitnessForm" onSubmit={handleSubmit}>
          <label htmlFor="weight" style={style.label}>Weight (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            required
            style={style.input}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height" style={style.label}>Height (cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            required
            style={style.input}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label htmlFor="age" style={style.label}>Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            style={style.input}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            type="submit"
            style={style.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = style.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = style.button.backgroundColor)}
          >
            Calculate BMI
          </button>
        </form>
        {/* Display results here if needed */}
      </div>
    </div>
  );
};

export default FitnessCalculator;
