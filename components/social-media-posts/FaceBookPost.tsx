import React from "react";
import AvatarComponent from "components/AvatarComponent";
import CustomImageComponent from "components/CustomImageComponent";
import SocialMediaButtonsContainer from "components/SocialMediaButtonsContainer";

interface Props {
  children: React.ReactNode;
}

const FaceBookPost = ({ children }: Props): JSX.Element => {
  return (
    <div className="facebook-post">
      <AvatarComponent
        alt="girl-pink-avatar"
        className="girl-pink"
        imageClassName="girl-pink-avatar"
        src="/girl-pink.png"
      >
        <p>Red</p>
      </AvatarComponent>
      {children}
      <CustomImageComponent
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
