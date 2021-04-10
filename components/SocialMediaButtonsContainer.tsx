import React from 'react';
import {
    BookmarkButton,
    CommentButton,
    LikeButton,
    ShareButton
  } from './button';
  
const SocialMediaButtonsContainer = (): JSX.Element => {
  return (
  <>
    <div className="social-media-buttons-container">
      <CommentButton/>
      <LikeButton/>
      <ShareButton/>
      <BookmarkButton/>
    </div>
    <style jsx global>{`
      .social-media-buttons-container span {
        margin: 10px;
      }
    `}</style>
  </>
  );
}

export default SocialMediaButtonsContainer;