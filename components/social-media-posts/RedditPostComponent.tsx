import React from 'react'
import SocialMediaButtonsContainer from 'components/SocialMediaButtonsContainer'
import Headline from "components/Headline"
import AvatarComponent from "components/AvatarComponent"
import { jsx } from '@emotion/react'

interface Props {
  avatarAlt: string;
  avatarChildren: string;
  avatarSrc: string;
  children: React.ReactNode;
  className: string;
}
  
const RedditPost = ({
  avatarAlt,
  avatarChildren,
  avatarSrc,
  className,
  children,
}: Props): JSX.Element=> (
  <>
    <div className={`${className}`}>
      <AvatarComponent
        alt={avatarAlt}
        children={avatarChildren}
        className="this-reddit-post-avatar-image"
        imageClassName="this-avatar-class"
        src={avatarSrc}
      />
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
  </>
);

export default RedditPost;

