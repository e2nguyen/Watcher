import Button from "components/button/button"

function Playground() {
  return ( <>
    <Button onClick={() => console.log("you clicked me")}> 
    this is primary button </Button>
  </> )
}

export default Playground;