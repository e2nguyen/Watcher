import React from 'react';
import {
    BookmarkButton,
    CommentButton,
    LikeButton,
    ShareButton
  } from './button';
  
const SocialMediaButtonsContainer = (): JSX.Element => {
  const socialMediaButtonsContainerSpanStyling = "mx-social-media-button-container-margin"
  return (
    <div>
      <span className={socialMediaButtonsContainerSpanStyling}><CommentButton/></span>
      <span className={socialMediaButtonsContainerSpanStyling}><LikeButton/></span>
      <span className={socialMediaButtonsContainerSpanStyling}><ShareButton/></span>
      <span className={socialMediaButtonsContainerSpanStyling}><BookmarkButton/></span>
    </div>
  );
}

export default SocialMediaButtonsContainer;
