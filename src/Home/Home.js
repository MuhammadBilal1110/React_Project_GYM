
import React from 'react';

import { Link } from "react-router-dom";
const BackgroundComponent = () => {
  const style = {
    fontFamily: 'Arial, sans-serif',
    
    backgroundImage: 'url(HomePage.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Ensure the image is centered
    height: '100vh',
    margin: '5px',
    padding: 0,
    display: 'flex', // Use flexbox for alignment
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'flex-start', // Align content to the left
    color: 'black',
    padding: '10px', // Padding for the content
  };

  const headingStyle = {
    fontSize: '35px', // Larger font size for the 
    color:'black'
    
  };

  const paragraphStyle = {
    fontSize: '25px', // Larger font size for the paragraph
    color:'brown',
  };

  return (
    <div style={style}>
    
    
    </div>
  );
};

export default BackgroundComponent;
