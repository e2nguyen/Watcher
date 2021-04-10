import {
  BookmarkButton,
  Button,
  CommentButton,
  LikeButton,
  ShareButton
} from "components/button";
import Headline from "components/Headline"
import CustomImage from "components/CustomImage";
import SocialMediaButtonsContainer from "components/SocialMediaButtonsContainer";
import FaceBookPost from "components/social-media-posts/FaceBookPost";
import RedditPost from "components/social-media-posts/RedditPost";

function Playground() {
  return (
    <>
      {/* TO DO: Alphabetize */}
      <RedditPost>
        <p>50 points * 11 comments</p>
      </RedditPost>
      <br></br>
      <br></br>

      <CustomImage
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
      <CustomImage
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
