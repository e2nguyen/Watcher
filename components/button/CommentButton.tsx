import React from 'react';
import Button from './button';

const CommentButton = (): JSX.Element => {
  const onClick = () => {
    console.log('commented')
  }

  return (
    <Button
      backgroundSize='18px'
      backgroundURL='/pencil-comment.png'
      height="18px"
      onClick={onClick}
      width="18px"
    />
  )
};

export default CommentButton;