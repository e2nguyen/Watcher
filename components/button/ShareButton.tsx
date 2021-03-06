import React from 'react';
import Button from './button';
  
const ShareButton: React.FC = () => { 
  const onClick = () => {
    console.log("you are sharing something")
  }
  
  return(
    <Button 
      backgroundSize="18px"
      backgroundURL="/plane-share.png"
      height="18px"
      onClick={onClick}
      width="18px"
    /> 
    )
  };
  
  export default ShareButton;
