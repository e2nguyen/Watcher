import React from 'react';
import { Button } from 'components/button'; 

interface Props {
    children?: React.ReactNode;
  }
  
  const BookmarkButton: React.FC<Props> = ({ 
    children, 
  }) => (
    <div className="bookmark-button-container">
      <Button 
        backgroundSize="18px"
        backgroundURL="/bookmark.png"
        onClick={() => console.log("you are bookmarking something")}
        height="18px"
        width="18px"
      > 
        {children}
      </Button>
    </div>
  );
  
  export default BookmarkButton;
  