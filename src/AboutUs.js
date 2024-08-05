

// 

import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const BackgroundComponent = () => {
  const style = {
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url(/AboutUs.jpg)', // Ensure correct path if image is in public folder
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Ensure the image is centered
    height: '100vh',
   
    
    display: 'flex', 
    
    color: 'white',
  };

  return (
    <div style={style}>
  
      <div className="content">
        <p>Welcome to the best GYM in Islamabad (G-13). Our mission is to help you achieve your fitness goals with the best equipment and professional trainers.</p>
        <p>We offer a variety of classes and personal training sessions tailored to your needs. Join us today and start your fitness journey!</p>
      </div>
    </div>
  );
};

export default BackgroundComponent;
