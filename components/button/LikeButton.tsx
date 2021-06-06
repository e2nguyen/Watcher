import React from 'react';
import Button from './button';

const LikeButton = (): JSX.Element => {
  const onClick = () => {
    console.log('liked')
  }

  return (
    <Button
      backgroundSize="bg-size-18"
      backgroundImage="bg-heart-icon"
      height="18"
      onClick={onClick}
      width="18"
    />
  )
};

export default LikeButton;