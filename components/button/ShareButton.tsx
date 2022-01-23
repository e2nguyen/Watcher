import React from 'react';
import Button from './button';
  
const ShareButton = (): JSX.Element => { 
  const onClick = () => {
    console.log("you are sharing something")
  }
  
  return(
    <Button 
      backgroundImage="bg-plane-share"
      height="h-social-media-button-height"
      onClick={onClick}
      width="w-social-media-button-width"
    /> 
    )
  };
  
  export default ShareButton;
