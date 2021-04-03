import React from 'react'
import SocialMediaButtonsContainer from 'components/SocialMediaButtonsContainer'
import Headline from "components/Headline"
import AvatarComponent from "components/AvatarComponent"

interface Props {
  children: React.ReactNode;
}
  
const RedditPost = ({ children }: Props): JSX.Element=> {
  return (
    <div className="reddit-post">
      <AvatarComponent
        alt="alt text for girl pin avatar"
        className="this-reddit-post-avatar-image"
        imageClassName="this-avatar-class"
        src="/girl-pink.png"
      >
        <p>fdsfjas</p>
      </AvatarComponent>
      <Headline>
        yo check out my cat /r/cats
        fdsalfkkalfdksfl;dsf;lmskdf;
        fslafsa;s dlsafs;k;fsa;fs ldsak;
        fslafsa;s dlsafs;k;fsa;fs ldsak;
        fslafsa;s dlsafs;k;fsa;fs ldsak;
        fslafsa;s dlsafs;k;fsa;fs ldsak;
      </Headline>
      {children}
      <SocialMediaButtonsContainer/>
    </div>
  ); 
}

export default RedditPost;

