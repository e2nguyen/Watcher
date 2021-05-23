import React from "react";
import Avatar from "components/Avatar";
import CustomImage from "components/CustomImage";
import SocialMediaButtonsContainer from "components/SocialMediaButtonsContainer";

interface Props {
  children: React.ReactNode;
}

const FaceBookPost = ({ 
    children 
  }: Props): JSX.Element => {
    const facebookStyling = ''
    return (
      <div className="facebook-post">
        <Avatar
          alt="girl-pink-avatar"
          className="girl-pink"
          src="/girl-pink.png"
        >
          <p>Red</p>
        </Avatar>
        {children}
        <CustomImage
          alt="girl-pink-image-post-1"
          className="girl-pink-post-1"
          height="200px"
          src="/character-sprites-sample.png"
          width="350px"
        />
        <SocialMediaButtonsContainer />
      </div>
    );
}

export default FaceBookPost;
