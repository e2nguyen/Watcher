import React from 'react';
import Button from './button';

const LikeButton = (): JSX.Element => {
  const onClick = () => {
    console.log('liked')
  }

  return (
    <Button
      backgroundSize="18px"
      backgroundURL="/heart-icon.png"
      height="18px"
      onClick={onClick}
      width="18px"
    />
  )
};

export default LikeButton;