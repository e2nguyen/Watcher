import React from 'react';
import Button from './button';

const CommentButton: React.FC = () => {
  const onClick = () => {
    console.log('commented')
  }

  return (
    <Button
      backgroundURL='/pencil-comment.png'
      backgroundSize='18px'
      height="18px"
      onClick={onClick}
      width="18px"
    />
  )
};

export default CommentButton;