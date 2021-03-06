import Headline from "components/Headline"
import { Button, LikeButton } from "components/button";
import CustomImageComponent from "components/CustomImageComponent"

function Playground() {
  return (
    <>
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
      <Headline>
        This is a Headline 
      </Headline>
      <CustomImageComponent
        alt="bleh"
        className="meh"
        height="200px"
        src="/character-sprites-sample.png"
        width="320px"
      />
      <LikeButton/>
    </>
  );
}

export default Playground;
