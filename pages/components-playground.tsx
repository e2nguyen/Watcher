import {
  BookmarkButton,
  Button,
  CommentButton,
  LikeButton,
  ShareButton
} from "components/button";
import Headline from "components/Headline"
import CustomImageComponent from "components/CustomImageComponent"
import SocialMediaButtonsContainer from "components/SocialMediaButtonsContainer"
import FaceBookPost from "components/social-media-posts/FaceBookPost";
import RedditPost from "components/social-media-posts/RedditPostComponent"

function Playground() {
  return (
    <>
      {/* TO DO: Alphabetize */}
      <RedditPost
        className="first-reddit-post-here"
        avatarAlt="pink girl profile pic"
        avatarChildren="kawaii_with_cat"
        avatarSrc="/girl-pink.png"
      >
      <p>50 points * 11 comments</p>
      </RedditPost>
      <br></br>
      <br></br>

      <CustomImageComponent
        alt="bleh"
        className="meh"
        height="200px"
        src="/character-sprites-sample.png"
        width="320px"
      />
      <LikeButton/>
      <CommentButton/>
      <FaceBookPost
      >
       <p> This is a facebook type post >:)</p>
      </FaceBookPost>
      <CustomImageComponent
        alt="bleh"
        className="meh"
        height="200px"
        src="/character-sprites-sample.png"
        width="320px"
      />
    </>
  );
}

export default Playground;
