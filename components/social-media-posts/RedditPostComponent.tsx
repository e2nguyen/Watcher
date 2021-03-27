import React from 'react'
import SocialMediaButtonsContainer from 'components/SocialMediaButtonsContainer'
import Headline from "components/Headline"
import AvatarComponent from "components/AvatarComponent"

interface Props {
  avatarAlt: string;
  avatarChildren: string;
  avatarSrc: string;
  children: React.ReactNode;
  className: string;
}
  
const RedditPostStyling: React.FC<{className: string}> = ({className}) => (
  <style jsx global>{`
    .${className} {
      background-color: pink;
      border: solid;
      height: auto;
      padding-bottom: 20px;
      padding-left: 10px;
      width: 500px;
    }
  `}</style>
)

const RedditPost: React.FC<Props> = ({
  avatarAlt,
  avatarChildren,
  avatarSrc,
  className,
  children,
}) => (
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
    <RedditPostStyling className={className}></RedditPostStyling>
  </>
);

export default RedditPost;

