import React from 'react';
import Button from './button';

const BookmarkButton = (): JSX.Element => {
  const onClick = () => {
    console.log("you are bookmarking something")
  }

  return(
    <Button 
      backgroundSize="18px"
      backgroundURL="/bookmark.png"
      height="18px"
      onClick={onClick}
      width="18px"
    /> 
  )
};

export default BookmarkButton;
  