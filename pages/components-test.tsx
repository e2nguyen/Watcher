import Button from "components/button/button"

function Playground() {
  return ( <>
    <Button onClick={() => console.log("you clicked the cat!")}
    backgroundURL = "cat.png"
    > 
     </Button>
    <Button onClick={() => console.log("you clicked me")}
    backgroundURL = "girl-pink.png"
    > 
      </Button>
  </> )
}

export default Playground;