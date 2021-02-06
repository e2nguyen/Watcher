import Headline from "components/Headline"

function Playground() {
  return (
    <>
      <Button 
        onClick={() => console.log("you clicked the cat!")}
        backgroundURL = "/cat.png"
        height = "200px"
        width = "200px"
      /> 
      <Button 
        onClick={() => console.log("you clicked me")}
        backgroundURL = "/girl-pink.png"
        height = "200px"
        width = "200px"
      />
      <Headline>
        This is a Headline 
      </Headline>
    </>
  );
}

export default Playground;
