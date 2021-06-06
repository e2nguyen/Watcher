import React from 'react';
import Button from './button';
  
const ShareButton = (): JSX.Element => { 
  const onClick = () => {
    console.log("you are sharing something")
  }
  
  return(
    <Button 
      backgroundImage="bg-plane-share"
      height="social-media-button-height"
      onClick={onClick}
      width="social-media-button-width"
    /> 
    )
  };
  
  export default ShareButton;
