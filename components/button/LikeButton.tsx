import React from 'react';
import Button from './button';

const LikeButton: React.FC = () => {
  const onClick = () => {
    console.log('liked')
  }

  return (
    <Button
      backgroundURL='/heart-icon.png'
      backgroundSize='18px'
      height="18px"
      onClick={onClick}
      width="18px"
    />
  )
};

export default LikeButton;