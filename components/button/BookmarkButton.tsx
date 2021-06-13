import React from 'react';
import Button from './button';

const BookmarkButton = (): JSX.Element => {
  const onClick = () => {
    console.log("you are bookmarking something")
  }

  return(
    <Button 
      backgroundImage="bg-bookmark"
      height="social-media-button-height"
      onClick={onClick}
      width="social-media-button-width"
    /> 
  )
};

export default BookmarkButton;
  