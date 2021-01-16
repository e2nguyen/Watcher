import Button from "components/button/button"

function Playground() {
  return ( <>
    <Button onClick={() => console.log("you clicked the cat!")}
    backgroundURL = "/cat.png"
    height = "200px"
    width = "200px"
    > 
     </Button>
    <Button onClick={() => console.log("you clicked me")}
    backgroundURL = "/girl-pink.png"
    height = "200px"
    width = "200px"
    > 
      </Button>
  </> )
}

export default Playground;