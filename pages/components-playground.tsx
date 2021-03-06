import {
  BookmarkButton,
  Button,
  CommentButton,
  LikeButton,
  ShareButton
} from "components/button";
import Headline from "components/Headline"
import CustomImageComponent from "components/CustomImageComponent"

function Playground() {
  return (
    <>
      <Headline>
        This is a Headline for da playground
      </Headline>
      <ShareButton/>
      <BookmarkButton/>
      <Button 
        backgroundURL="/cat.png"
        backgroundSize="200px"
        onClick={() => alert("meow!")}
        height="200px"
        width="200px"
      /> 
      <Button 
        onClick={() => console.log("you clicked the cat!")}
        backgroundSize="200px"
        backgroundURL = "/cat.png"
        height="200px"
        width="200px"
      /> 
      <Button 
        onClick={() => console.log("you clicked me")}
        backgroundSize="200px"
        backgroundURL="/girl-pink.png"
        height="200px"
        width="200px"
      />
      <CustomImageComponent
        alt="bleh"
        className="meh"
        height="200px"
        src="/character-sprites-sample.png"
        width="320px"
      />
      <LikeButton/>
      <CommentButton/>
    </>
  );
}

export default Playground;
