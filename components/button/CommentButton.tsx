import React from 'react';
import Button from './button';

const CommentButton = (): JSX.Element => {
  const onClick = () => {
    console.log('commented')
  }

  return (
    <Button
      backgroundImage="bg-pencil-comment"
      height="social-media-button-height"
      onClick={onClick}
      width="social-media-button-width"
    />
  )
};

export default CommentButton;