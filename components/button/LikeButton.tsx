import React from 'react';
import Button from './button';

const LikeButton = (): JSX.Element => {
  const onClick = () => {
    console.log('liked')
  }

  return (
    <Button
      backgroundImage="bg-heart-icon"
      height="social-media-button-height"
      onClick={onClick}
      width="social-media-button-width"
    />
  )
};

export default LikeButton;