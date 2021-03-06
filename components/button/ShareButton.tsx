import React from 'react';
import { Button } from 'components/button'; 

interface Props {
    children?: React.ReactNode;
  }
  
  const ShareButton: React.FC<Props> = ({ 
    children, 
  }) => (
    <div className="share-button-container">
      <Button 
        backgroundSize="18px"
        backgroundURL="/plane-share.png"
        height="18px"
        onClick={() => console.log("you are sharing something")}
        width="18px"
      > 
        {children}
      </Button>
    </div>
  );
  
  export default ShareButton;
  