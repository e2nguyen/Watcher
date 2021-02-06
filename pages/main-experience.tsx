import Button from "components/button/button"
import CustomDivComponent from "components/CustomDivComponent"

function MainExperience() {
  return ( <>
    <CustomDivComponent 
    className = "sampleDiv"
    color = "green"
    header = "first div"
    height = "500px"
    width = "100%"
    >
      blah
      <Button onClick={() => console.log("you clicked the cat!")}
        backgroundURL = "/cat.png"
        height = "200px"
        width = "200px"
        > 
      </Button>
    </CustomDivComponent>
    <CustomDivComponent 
    className = "sampleDiv2"
    color = "pink"
    header = "second div"
    height = "500px"
    width = "100%"
    >
      2nd exp
      <Button onClick={() => console.log("you clicked the cat!")}
        backgroundURL = "/girl-black.png"
        height = "200px"
        width = "200px"
        > 
      </Button>
    </CustomDivComponent>
    <CustomDivComponent 
    className = "sampleDiv2"
    color = "grey"
    header = "third div"
    height = "500px"
    width = "100%"
    >
      3rd exp
      <Button onClick={() => console.log("you clicked the cat!")}
        backgroundURL = "/girl-pink.png"
        height = "200px"
        width = "200px"
        > 
      </Button>
    </CustomDivComponent>  
  </> )
}

export default MainExperience;