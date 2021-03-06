import Headline from "components/Headline"
import { Button, BookmarkButton, ShareButton } from 'components/button'; 

function Playground() {
  return (
    <>
      <Headline>
        This is a Headline for da playground
      </Headline>
      <ShareButton
      ></ShareButton>
      <BookmarkButton
      ></BookmarkButton>
      <Button 
        backgroundURL="/cat.png"
        backgroundSize="200px"
        onClick={() => alert("meow!")}
        height="200px"
        width="200px"
      /> 
    </>
  );
}

export default Playground;
